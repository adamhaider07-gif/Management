/* ============================================================
   MNGT 215 Study Hub — app logic (no frameworks, no build step).
   Routes: #/  #/lecture/:id  #/lecture/:id/exam/:tier  #/final
   Each lecture has THREE timed exams (easy / medium / hard). An exam =
   12 MCQs (some fill-in-the-blank) → 2 case studies → 1 essay, under a
   75-minute countdown. Lectures also carry inline "check yourself"
   questions between sections. Progress is stored in localStorage.

   Data schema (data.js):
     mcq item : { type?:"mcq"|"fill", tier, q, o[4], a, accept[], h[], e }
                (type defaults to "mcq"; fill uses accept[] + typed input)
     case     : { tier, title, scenario, qs:[{q,a}] }
     essay    : { tier, q, outline, model }
     section  : { h, blocks[], check?:{q,o[4],a,e} }
   ============================================================ */
(function () {
  "use strict";

  var COURSE = window.COURSE;
  var app = document.getElementById("app");
  var LS_KEY = "mngt215_v2";
  var EXAM_MS = 75 * 60 * 1000; // 1 hour 15 minutes

  /* ---------------- storage ---------------- */
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  var store = loadStore();
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) { /* private mode */ }
  }
  function lstate(id) {
    store.lectures = store.lectures || {};
    store.lectures[id] = store.lectures[id] || {};
    return store.lectures[id];
  }
  function examState(id) {
    var s = lstate(id);
    s.exams = s.exams || {};
    return s.exams;
  }

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function findLecture(id) {
    for (var i = 0; i < COURSE.lectures.length; i++)
      if (COURSE.lectures[i].id === id) return COURSE.lectures[i];
    return null;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pct(x) { return Math.round(x * 100); }
  function normAns(s) {
    return String(s).toLowerCase().trim()
      .replace(/’/g, "'").replace(/[.,;:!?]+$/g, "")
      .replace(/\s+/g, " ");
  }

  /* ---------------- difficulty tiers ---------------- */
  var TIERS = [
    { key: "easy",   label: "Easy",   sub: "Recall & definitions", emoji: "🟢" },
    { key: "medium", label: "Medium", sub: "Apply the concepts",   emoji: "🟡" },
    { key: "hard",   label: "Hard",   sub: "Critical thinking",    emoji: "🔴" }
  ];
  function tierMeta(k) {
    for (var i = 0; i < TIERS.length; i++) if (TIERS[i].key === k) return TIERS[i];
    return { key: k, label: k || "Mixed", sub: "", emoji: "" };
  }
  function mcqsByTier(L, tier) {
    var a = [];
    for (var i = 0; i < L.mcqs.length; i++)
      if (tier === "all" || L.mcqs[i].tier === tier) a.push(i);
    return a;
  }
  function casesByTier(L, tier) {
    return L.cases.filter(function (c) { return c.tier === tier; });
  }
  function essayByTier(L, tier) {
    for (var i = 0; i < L.essays.length; i++) if (L.essays[i].tier === tier) return L.essays[i];
    return L.essays[0];
  }

  /* ---------------- progress model ----------------
     A lecture has 3 exams; progress = fraction of exams attempted. */
  function lectureProgress(L) {
    var ex = examState(L.id), done = 0;
    TIERS.forEach(function (t) { if (ex[t.key] && ex[t.key].attempted) done++; });
    return done / 3;
  }
  function overallProgress() {
    var sum = 0;
    COURSE.lectures.forEach(function (L) { sum += lectureProgress(L); });
    return sum / COURSE.lectures.length;
  }

  /* ---------------- theme ---------------- */
  var themeBtn = document.getElementById("themeToggle");
  function applyTheme() {
    var t = store.theme || "light";
    document.documentElement.setAttribute("data-theme", t);
    themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  }
  themeBtn.addEventListener("click", function () {
    store.theme = (store.theme === "dark") ? "light" : "dark";
    save(); applyTheme();
  });
  applyTheme();

  /* ---------------- timer ---------------- */
  var quiz = null;
  var timerInt = null;
  function clearTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } }
  function fmtClock(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60), ss = s % 60;
    return m + ":" + (ss < 10 ? "0" : "") + ss;
  }
  function tick() {
    if (!quiz || !quiz.endAt) return;
    var rem = quiz.endAt - Date.now();
    var el = document.getElementById("examTimer");
    if (el) {
      el.textContent = "⏱ " + fmtClock(rem);
      el.classList.toggle("low", rem <= 5 * 60 * 1000);
    }
    if (rem <= 0) { clearTimer(); timeUp(); }
  }
  function startTimer() { clearTimer(); timerInt = setInterval(tick, 1000); }
  function timeUp() {
    if (!quiz) return;
    quiz.timedOut = true;
    quiz.stage = "results";
    renderExam();
  }
  function timerBarHtml() {
    return '<span class="exam-timer" id="examTimer">⏱ ' + fmtClock(quiz.endAt - Date.now()) + "</span>";
  }

  /* ---------------- router ---------------- */
  window.addEventListener("hashchange", route);

  function route() {
    window.scrollTo(0, 0);
    if (quiz) { clearTimer(); }
    var h = location.hash || "#/";
    var parts = h.replace(/^#\//, "").split("/");
    if (!parts[0]) { quiz = null; return renderHome(); }
    if (parts[0] === "lecture") {
      var L = findLecture(parts[1]);
      if (!L) return renderHome();
      if (parts[2] === "exam" && parts[3]) return startExam(L, parts[3]);
      quiz = null;
      return renderLecture(L);
    }
    if (parts[0] === "final") { quiz = null; return renderFinalSetup(); }
    renderHome();
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    var op = overallProgress();
    var html = "";
    html += '<section class="hero">';
    html += '<span class="pill">' + esc(COURSE.code) + " · " + esc(COURSE.term) + "</span>";
    html += "<h1>" + esc(COURSE.title) + "</h1>";
    html += '<p class="lead">' + esc(COURSE.school) + "</p>";
    html += '<div class="card flat">';
    html += '<div class="progress-row"><strong>Overall progress</strong><span class="muted small">' + pct(op) + "%</span></div>";
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct(op) + '%"></div></div>';
    html += '<p class="muted small" style="margin:8px 0 0">Each lecture has three timed exams — Easy, Medium and Hard. Sit all three to complete a lecture.</p>';
    html += "</div></section>";

    html += '<div class="grid">';
    COURSE.lectures.forEach(function (L) {
      var p = lectureProgress(L);
      var ex = examState(L.id);
      var doneN = 0; TIERS.forEach(function (t) { if (ex[t.key] && ex[t.key].attempted) doneN++; });
      html += '<a class="lecture-card" href="#/lecture/' + L.id + '">';
      html += '<div class="top"><span class="pill">Week ' + L.week + "</span>" +
              '<span class="pill ' + (doneN === 3 ? "green" : "gray") + '">' + doneN + "/3 exams</span></div>";
      html += "<h3>" + esc(L.title) + "</h3>";
      html += '<p class="blurb">' + esc(L.blurb) + "</p>";
      html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct(p) + '%"></div></div>';
      html += '<small class="muted">' + pct(p) + "% complete</small>";
      html += "</a>";
    });
    var fb = store.finalBest != null ? '<span class="pill">Best ' + store.finalBest + "%</span>" : '<span class="pill">Cumulative</span>';
    html += '<a class="lecture-card final-card" href="#/final">';
    html += '<div class="top"><span class="pill">Final Exam Mode</span>' + fb + "</div>";
    html += "<h3>Mixed exam from all 12 lectures</h3>";
    html += '<p class="blurb">Random MCQs drawn from every week — like the real thing.</p>';
    html += "</a>";
    html += "</div>";
    app.innerHTML = html;
  }

  /* ---------------- lecture page (study + inline checks + exams) ---------------- */
  function blockHtml(b) {
    if (b.t === "def") return '<div class="def"><span class="term">' + esc(b.term) + "</span>" + esc(b.d) + "</div>";
    if (b.t === "p") return "<p>" + esc(b.text) + "</p>";
    if (b.t === "ex") return '<div class="ex"><span class="term">' + esc(b.title) + ".</span> " + esc(b.text) + "</div>";
    if (b.t === "list") {
      var h = '<p class="list-title">' + esc(b.title) + "</p><ul class='clean'>";
      b.items.forEach(function (it) { h += "<li>" + esc(it) + "</li>"; });
      return h + "</ul>";
    }
    if (b.t === "table") {
      var h2 = '<p class="tbl-title">' + esc(b.title) + '</p><div class="tbl-wrap"><table class="tbl"><thead><tr>';
      b.cols.forEach(function (c) { h2 += "<th>" + esc(c) + "</th>"; });
      h2 += "</tr></thead><tbody>";
      b.rows.forEach(function (r) {
        h2 += "<tr>";
        r.forEach(function (cell) { h2 += "<td>" + esc(cell) + "</td>"; });
        h2 += "</tr>";
      });
      return h2 + "</tbody></table></div>";
    }
    return "";
  }

  function renderLecture(L) {
    var ex = examState(L.id);
    var html = '<a class="back-link" href="#/">← All lectures</a>';
    html += '<span class="pill" style="margin-left:10px">Week ' + L.week + "</span>";
    html += "<h1>" + esc(L.title) + "</h1>";
    html += '<p class="lead">' + esc(L.blurb) + "</p>";

    html += '<h2 style="margin-top:8px">Take an exam</h2>';
    html += '<p class="muted small" style="margin:0 0 10px">Each exam is 12 MCQs (some fill-in-the-blank) · 2 case studies · 1 essay, under a 75-minute timer.</p>';
    html += '<div class="quiz-launcher">';
    TIERS.forEach(function (t) {
      var e = ex[t.key];
      var sub = e && e.best != null ? "best " + e.best + "%" : "not attempted";
      html += '<button class="launch" data-go="#/lecture/' + L.id + "/exam/" + t.key + '">';
      html += '<span class="pill ' + t.key + '">' + t.emoji + " " + esc(t.label) + "</span>";
      html += "<strong>" + esc(t.sub) + "</strong><small>12 MCQ · 2 cases · 1 essay · " + sub + "</small></button>";
    });
    html += "</div>";

    // study sections with inline checks
    var checks = [];
    L.sections.forEach(function (sec, si) {
      html += "<h2>" + esc(sec.h) + "</h2>";
      html += '<div class="card">';
      sec.blocks.forEach(function (b) { html += blockHtml(b); });
      html += "</div>";
      if (sec.check) {
        var idx = checks.push(sec.check) - 1;
        html += inlineCheckHtml(sec.check, idx);
      }
    });

    app.innerHTML = html;
    app.querySelectorAll("[data-go]").forEach(function (btn) {
      btn.addEventListener("click", function () { location.hash = btn.getAttribute("data-go"); });
    });
    wireInlineChecks(checks);
  }

  function inlineCheckHtml(ck, idx) {
    var h = '<div class="inline-check" data-ck="' + idx + '">';
    h += '<span class="check-label">✔︎ Check yourself</span>';
    h += '<p class="check-q">' + esc(ck.q) + "</p>";
    h += '<div class="check-opts">';
    ck.o.forEach(function (o, oi) {
      h += '<button class="opt check-opt" data-oi="' + oi + '">' + esc(o) + "</button>";
    });
    h += '</div><div class="check-explain"></div></div>';
    return h;
  }
  function wireInlineChecks(checks) {
    app.querySelectorAll(".inline-check").forEach(function (box) {
      var idx = parseInt(box.getAttribute("data-ck"), 10);
      var ck = checks[idx];
      var done = false;
      box.querySelectorAll(".check-opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (done) return;
          done = true;
          var oi = parseInt(btn.getAttribute("data-oi"), 10);
          box.querySelectorAll(".check-opt").forEach(function (b) {
            var i = parseInt(b.getAttribute("data-oi"), 10);
            b.setAttribute("disabled", "disabled");
            if (i === ck.a) b.classList.add("correct");
            else if (i === oi) b.classList.add("wrong");
            else b.classList.add("dim");
          });
          var ok = oi === ck.a;
          box.querySelector(".check-explain").innerHTML =
            '<span class="verdict ' + (ok ? "ok" : "no") + '">' + (ok ? "✓ Correct" : "✗ Not quite") + "</span>" + esc(ck.e);
        });
      });
    });
  }

  /* ---------------- exam engine ---------------- */
  function startExam(L, tier) {
    var tm = tierMeta(tier);
    if (tier !== "easy" && tier !== "medium" && tier !== "hard") { location.hash = "#/lecture/" + L.id; return; }
    var mcqIdxs = shuffle(mcqsByTier(L, tier));
    quiz = {
      kind: "exam", tier: tier, lecture: L,
      mcqItems: mcqIdxs.map(function (qi) { return { L: L, qi: qi }; }),
      cases: casesByTier(L, tier),
      essay: essayByTier(L, tier),
      stage: "mcq", i: 0, correct: 0, wrong: [],
      endAt: Date.now() + EXAM_MS,
      backHash: "#/lecture/" + L.id,
      title: "Week " + L.week + " · " + tm.label + " exam"
    };
    startTimer();
    renderExam();
  }

  function renderExam() {
    if (quiz.stage === "mcq") return renderQuestion();
    clearTimer();
    if (quiz.stage === "cases") return renderCasesStage();
    if (quiz.stage === "essay") return renderEssayStage();
    if (quiz.stage === "results") return renderResults();
  }

  function examHeadHtml(label, rightPill) {
    var html = '<a class="back-link" href="' + quiz.backHash + '">← Exit exam</a>';
    html += '<div class="exam-bar"><div class="exam-bar-l"><strong>' + esc(quiz.title || label) + "</strong>";
    if (rightPill) html += ' <span class="pill gray">' + rightPill + "</span>";
    html += "</div>" + (quiz.endAt ? timerBarHtml() : "") + "</div>";
    return html;
  }

  /* Per-question flow: a wrong pick reveals a targeted hint and lets the
     student try again; the explanation shows only after they get it right
     or tap "Show me the answer". First-try-correct counts for the score. */
  function renderQuestion() {
    var item = quiz.mcqItems[quiz.i];
    var m = item.L.mcqs[item.qi];
    var type = m.type || "mcq";
    var tm = tierMeta(m.tier);

    var html = examHeadHtml(quiz.title, "Q " + (quiz.i + 1) + " / " + quiz.mcqItems.length);
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct(quiz.i / quiz.mcqItems.length) + '%"></div></div>';
    html += '<div class="card" style="margin-top:14px">';
    html += '<span class="pill ' + esc(m.tier || "gray") + '">' + esc(tm.label) + "</span>";
    if (type === "fill") html += ' <span class="pill gray">Fill in the blank</span>';
    html += '<p class="q-text">' + esc(m.q) + "</p>";

    if (type === "fill") html += renderFillBody();
    else html += renderMcqBody(m);

    html += '<div id="hintSlot"></div><div id="explainSlot"></div></div>';
    app.innerHTML = html;
    app.querySelector(".back-link").addEventListener("click", clearTimer);

    var missed = false;   // any wrong attempt on this question
    var resolved = false; // answer fully revealed

    function reveal(gaveUp) {
      resolved = true;
      if (type === "fill") {
        var inp = document.getElementById("fillInput");
        if (inp) inp.setAttribute("disabled", "disabled");
        var sb = document.getElementById("fillSubmit"); if (sb) sb.setAttribute("disabled", "disabled");
      } else {
        app.querySelectorAll(".opt").forEach(function (b) {
          var oi = parseInt(b.getAttribute("data-oi"), 10);
          b.setAttribute("disabled", "disabled");
          if (oi === m.a) b.classList.add("correct");
          else if (!b.classList.contains("wrong")) b.classList.add("dim");
        });
      }
      document.getElementById("hintSlot").innerHTML = "";
      var ok = !missed;
      var ex = '<div class="explain">';
      ex += '<span class="verdict ' + (ok ? "ok" : "no") + '">' +
            (ok ? "✓ Correct" : (gaveUp ? "Here's the answer" : "✓ Got there in the end")) + "</span>";
      if (type === "fill") ex += '<p style="margin:0 0 6px"><strong>Answer:</strong> ' + esc(m.accept && m.accept[0] ? m.accept[0] : "") + "</p>";
      ex += esc(m.e);
      if (quiz.kind === "final") ex += '<span class="src-tag">From Week ' + item.L.week + " — " + esc(item.L.title) + "</span>";
      ex += "</div>";
      var last = quiz.i + 1 >= quiz.mcqItems.length;
      ex += '<div class="btn-row"><button class="btn primary" id="nextBtn">' +
            (last ? (quiz.kind === "exam" ? "Continue to case studies →" : "See results") : "Next question →") + "</button></div>";
      document.getElementById("explainSlot").innerHTML = ex;
      var nb = document.getElementById("nextBtn");
      nb.addEventListener("click", function () {
        quiz.i++;
        if (quiz.i < quiz.mcqItems.length) { renderQuestion(); return; }
        if (quiz.kind === "exam") { quiz.stage = "cases"; renderExam(); }
        else { quiz.stage = "results"; renderResults(); }
      });
      nb.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    function markWrongHint(hintText) {
      if (!missed) quiz.wrong.push(item);
      missed = true;
      var hh = '<div class="hint"><span class="hint-label">💡 Rethink that</span>' + esc(hintText) + "</div>";
      hh += '<div class="btn-row"><button class="btn small ghost" id="giveUpBtn">Show me the answer</button>' +
            '<span class="small muted" style="align-self:center">…or try again</span></div>';
      document.getElementById("hintSlot").innerHTML = hh;
      document.getElementById("giveUpBtn").addEventListener("click", function () { reveal(true); });
      document.getElementById("hintSlot").scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    if (type === "fill") {
      var accept = (m.accept || []).map(normAns);
      function submitFill() {
        if (resolved) return;
        var inp = document.getElementById("fillInput");
        var val = normAns(inp.value || "");
        if (!val) return;
        if (accept.indexOf(val) !== -1) {
          if (!missed) quiz.correct++;
          inp.classList.add("ok");
          reveal(false);
        } else {
          inp.classList.add("bad");
          var hint = (m.h && m.h[0]) ? m.h[0] : "Not quite — re-read the sentence and recall the exact term from the lecture.";
          markWrongHint(hint);
        }
      }
      document.getElementById("fillSubmit").addEventListener("click", submitFill);
      document.getElementById("fillInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); submitFill(); }
      });
    } else {
      app.querySelectorAll(".opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (resolved || btn.classList.contains("wrong")) return;
          var chosen = parseInt(btn.getAttribute("data-oi"), 10);
          if (chosen === m.a) {
            if (!missed) quiz.correct++;
            btn.classList.add("correct");
            reveal(false);
            return;
          }
          btn.classList.add("wrong");
          btn.setAttribute("disabled", "disabled");
          var hintText = (m.h && m.h[chosen]) ? m.h[chosen] : "Not quite — re-read the question and weigh the remaining options.";
          markWrongHint(hintText);
        });
      });
    }
  }

  function renderMcqBody(m) {
    var order = shuffle([0, 1, 2, 3]);
    var h = '<div class="opts">';
    order.forEach(function (oi) {
      h += '<button class="opt" data-oi="' + oi + '">' + esc(m.o[oi]) + "</button>";
    });
    return h + "</div>";
  }
  function renderFillBody() {
    return '<div class="fill-row"><input id="fillInput" class="fill-input" type="text" autocomplete="off" ' +
           'autocapitalize="off" spellcheck="false" placeholder="Type your answer…">' +
           '<button class="btn primary" id="fillSubmit">Submit</button></div>';
  }

  /* ---------------- exam: case-study stage ---------------- */
  function renderCasesStage() {
    quiz.casesRevealed = quiz.casesRevealed || {};
    var html = examHeadHtml(quiz.title, "Case studies");
    html += '<p class="lead" style="margin-top:14px">Work through each case as if writing it in the exam, then reveal the model answer to check yourself.</p>';
    quiz.cases.forEach(function (c, ci) {
      html += '<div class="card">';
      html += '<span class="pill">Case ' + (ci + 1) + "</span>";
      html += "<h3 style='margin-top:8px'>" + esc(c.title) + "</h3>";
      html += '<div class="scenario">' + esc(c.scenario) + "</div>";
      c.qs.forEach(function (q, qi) {
        html += '<div class="case-q"><p class="q">' + (qi + 1) + ". " + esc(q.q) + "</p>";
        html += '<div id="ca-' + ci + "-" + qi + '">';
        if (quiz.casesRevealed[ci + "-" + qi]) html += modelAnswerHtml(q.a);
        else html += '<button class="btn small" data-ci="' + ci + '" data-qi="' + qi + '">Reveal model answer</button>';
        html += "</div></div>";
      });
      html += "</div>";
    });
    html += '<div class="btn-row"><button class="btn primary" id="toEssay">Continue to essay →</button></div>';
    app.innerHTML = html;
    app.querySelector(".back-link").addEventListener("click", clearTimer);
    app.querySelectorAll("[data-ci]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ci = parseInt(btn.getAttribute("data-ci"), 10), qi = parseInt(btn.getAttribute("data-qi"), 10);
        quiz.casesRevealed[ci + "-" + qi] = true;
        document.getElementById("ca-" + ci + "-" + qi).innerHTML = modelAnswerHtml(quiz.cases[ci].qs[qi].a);
      });
    });
    document.getElementById("toEssay").addEventListener("click", function () { quiz.stage = "essay"; renderExam(); });
  }
  function modelAnswerHtml(a) {
    return '<div class="model-answer"><span class="label">Model answer</span>' + esc(a) + "</div>";
  }

  /* ---------------- exam: essay stage ---------------- */
  function renderEssayStage() {
    var e = quiz.essay;
    var html = examHeadHtml(quiz.title, "Essay");
    html += '<p class="lead" style="margin-top:14px">Plan and write your answer, then open the outline to check it against what a grader looks for.</p>';
    html += '<div class="card"><span class="pill">Essay</span>';
    html += '<p class="q-text">' + esc(e.q) + "</p>";
    html += '<div id="essayBody"><button class="btn small" id="showEssay">Show model answer outline</button></div>';
    html += "</div>";
    html += '<div class="btn-row"><button class="btn primary" id="toResults">Finish &amp; see results →</button></div>';
    app.innerHTML = html;
    app.querySelector(".back-link").addEventListener("click", clearTimer);
    document.getElementById("showEssay").addEventListener("click", function () {
      document.getElementById("essayBody").innerHTML = essayBodyHtml(e);
    });
    document.getElementById("toResults").addEventListener("click", function () { quiz.stage = "results"; renderExam(); });
  }
  function essayBodyHtml(e) {
    var h = '<div class="outline-box"><span class="label">Key points a grader looks for</span><ul class="clean">';
    (e.outline || []).forEach(function (o) { h += "<li>" + esc(o) + "</li>"; });
    h += "</ul></div>";
    h += '<div class="model-answer"><span class="label">Short full model answer</span>' + esc(e.model) + "</div>";
    return h;
  }

  /* ---------------- results ---------------- */
  function renderResults() {
    clearTimer();
    var n = quiz.mcqItems.length;
    var score = n ? pct(quiz.correct / n) : 0;

    if (quiz.kind === "exam") {
      var ex = examState(quiz.lecture.id);
      var rec = ex[quiz.tier] || {};
      rec.attempted = true;
      if (rec.best == null || score > rec.best) rec.best = score;
      ex[quiz.tier] = rec;
      save();
    } else if (quiz.kind === "final") {
      if (store.finalBest == null || score > store.finalBest) store.finalBest = score;
      save();
    }

    var html = '<a class="back-link" href="' + quiz.backHash + '">← Back</a>';
    html += '<div class="card" style="text-align:center">';
    if (quiz.timedOut) html += '<span class="pill hard" style="margin-bottom:6px">⏱ Time up</span>';
    html += '<p class="muted" style="margin:0">' + esc(quiz.title || "Result") + " — MCQ section</p>";
    html += '<div class="score-big">' + quiz.correct + " / " + n + "</div>";
    html += '<span class="pill ' + (score >= 80 ? "green" : "") + '">' + score + "%</span>";
    if (quiz.kind === "exam") html += '<p class="muted small" style="margin-top:10px">Case studies and the essay are graded by you against the model answers.</p>';
    html += '<div class="btn-row" style="justify-content:center">';
    if (quiz.wrong.length) html += '<button class="btn primary" id="retryWrong">Retry the ' + quiz.wrong.length + " I missed</button>";
    html += '<button class="btn" id="retryAll">' + (quiz.kind === "final" ? "New final exam" : "Retake exam") + "</button>";
    html += '<a class="btn ghost" href="' + quiz.backHash + '">Done</a>';
    html += "</div></div>";

    if (quiz.wrong.length) {
      html += '<div class="card"><h3>Review what you missed</h3>';
      quiz.wrong.forEach(function (it) {
        var m = it.L.mcqs[it.qi];
        var ans = (m.type === "fill") ? (m.accept && m.accept[0] ? m.accept[0] : "") : m.o[m.a];
        html += '<div class="review-item"><span class="pill ' + esc(m.tier || "gray") + '" style="margin-bottom:6px">' + esc(tierMeta(m.tier).label) + "</span><br>";
        html += "<strong>" + esc(m.q) + "</strong><br>";
        html += '<span class="muted">Answer: </span>' + esc(ans) + "<br>";
        html += '<span class="muted small">' + esc(m.e) + "</span></div>";
      });
      html += "</div>";
    }
    app.innerHTML = html;

    var wrongItems = quiz.wrong.slice();
    var kind = quiz.kind, lec = quiz.lecture, tier = quiz.tier, back = quiz.backHash, title = quiz.title;
    var rb = document.getElementById("retryWrong");
    if (rb) rb.addEventListener("click", function () {
      quiz = {
        kind: kind, tier: tier, lecture: lec, mcqItems: wrongItems, cases: [], essay: null,
        stage: "mcq", i: 0, correct: 0, wrong: [], endAt: Date.now() + EXAM_MS, backHash: back,
        title: title + " · retry"
      };
      startTimer(); renderExam();
    });
    document.getElementById("retryAll").addEventListener("click", function () {
      if (kind === "final") renderFinalSetup();
      else startExam(lec, tier);
    });
  }

  /* ---------------- final exam setup ---------------- */
  function renderFinalSetup() {
    var total = 0;
    COURSE.lectures.forEach(function (L) { total += L.mcqs.length; });
    var html = '<a class="back-link" href="#/">← All lectures</a>';
    html += "<h1>Final Exam Mode</h1>";
    html += '<p class="lead">Random MCQs mixed from all 12 lectures (' + total + " in the bank), under a 75-minute timer. Each answer shows an explanation and its source week.</p>";
    if (store.finalBest != null) html += '<p><span class="pill green">Best so far: ' + store.finalBest + "%</span></p>";
    html += '<div class="card"><h3>How many questions?</h3>';
    html += '<div class="choice-row" id="countRow">';
    html += '<button class="choice sel" data-n="20">20</button>';
    html += '<button class="choice" data-n="40">40</button>';
    html += '<button class="choice" data-n="60">60</button>';
    html += '<button class="choice" data-n="all">All ' + total + "</button>";
    html += "</div>";
    html += '<h3 style="margin-top:18px">Difficulty</h3>';
    html += '<div class="choice-row" id="tierRow">';
    html += '<button class="choice sel" data-t="all">All tiers</button>';
    TIERS.forEach(function (t) {
      html += '<button class="choice" data-t="' + t.key + '">' + esc(t.label) + "</button>";
    });
    html += "</div>";
    html += '<div class="btn-row"><button class="btn primary" id="startFinal">Start final exam</button></div>';
    html += "</div>";
    app.innerHTML = html;
    var sel = "20", tierSel = "all";
    function wireRow(rowId, set) {
      document.getElementById(rowId).querySelectorAll(".choice").forEach(function (c) {
        c.addEventListener("click", function () {
          document.getElementById(rowId).querySelectorAll(".choice").forEach(function (x) { x.classList.remove("sel"); });
          c.classList.add("sel"); set(c);
        });
      });
    }
    wireRow("countRow", function (c) { sel = c.getAttribute("data-n"); });
    wireRow("tierRow", function (c) { tierSel = c.getAttribute("data-t"); });
    document.getElementById("startFinal").addEventListener("click", function () {
      startFinal(sel === "all" ? "all" : parseInt(sel, 10), tierSel);
    });
  }

  function startFinal(count, tier) {
    tier = tier || "all";
    var pool = [];
    COURSE.lectures.forEach(function (L) {
      L.mcqs.forEach(function (m, qi) { if (tier === "all" || m.tier === tier) pool.push({ L: L, qi: qi }); });
    });
    pool = shuffle(pool);
    if (count !== "all") pool = pool.slice(0, count);
    quiz = {
      kind: "final", tier: tier, lecture: null,
      mcqItems: pool, cases: [], essay: null,
      stage: "mcq", i: 0, correct: 0, wrong: [],
      endAt: Date.now() + EXAM_MS, backHash: "#/final",
      title: "Final Exam"
    };
    startTimer();
    renderExam();
  }

  /* ---------------- go ---------------- */
  route();
})();
