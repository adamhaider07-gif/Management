/* ============================================================
   MNGT 215 Study Hub — app logic (no frameworks, no build step).
   Routes: #/  #/lecture/:id  #/lecture/:id/mcq|cases|essays  #/final
   Progress is stored in localStorage under "mngt215_v1".
   ============================================================ */
(function () {
  "use strict";

  var COURSE = window.COURSE;
  var app = document.getElementById("app");
  var LS_KEY = "mngt215_v1";

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

  /* ---------------- progress model ----------------
     Each lecture has 3 components: MCQ done, cases done, essays done. */
  function caseQuestionCount(L) {
    var n = 0;
    L.cases.forEach(function (c) { n += c.qs.length; });
    return n;
  }
  function revealedCount(L) {
    var s = lstate(L.id), n = 0;
    var r = s.revealed || {};
    Object.keys(r).forEach(function (k) { n += r[k].length; });
    return n;
  }
  function essaysOpened(L) {
    var s = lstate(L.id);
    return (s.essaysOpened || []).length;
  }
  function lectureProgress(L) {
    var s = lstate(L.id);
    var done = 0;
    if (s.mcqDone) done++;
    if (revealedCount(L) >= caseQuestionCount(L)) done++;
    if (essaysOpened(L) >= L.essays.length) done++;
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

  /* ---------------- router ---------------- */
  window.addEventListener("hashchange", route);

  function route() {
    window.scrollTo(0, 0);
    var h = location.hash || "#/";
    var parts = h.replace(/^#\//, "").split("/");
    if (!parts[0]) return renderHome();
    if (parts[0] === "lecture") {
      var L = findLecture(parts[1]);
      if (!L) return renderHome();
      if (parts[2] === "mcq") return startMcq(L, false);
      if (parts[2] === "cases") return renderCases(L);
      if (parts[2] === "essays") return renderEssays(L);
      return renderLecture(L);
    }
    if (parts[0] === "final") return renderFinalSetup();
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
    html += '<div class="progress-row"><strong>Overall quiz progress</strong><span class="muted small">' + pct(op) + "%</span></div>";
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct(op) + '%"></div></div>';
    html += '<p class="muted small" style="margin:8px 0 0">Each lecture counts its MCQ set, case studies, and essays as three steps.</p>';
    html += "</div></section>";

    html += '<div class="grid">';
    COURSE.lectures.forEach(function (L) {
      var p = lectureProgress(L);
      var s = lstate(L.id);
      var scoreBadge = (s.mcqBest != null) ? '<span class="pill ' + (s.mcqBest >= 80 ? "green" : "gray") + '">MCQ best ' + s.mcqBest + "%</span>" : "";
      html += '<a class="lecture-card" href="#/lecture/' + L.id + '">';
      html += '<div class="top"><span class="pill">Week ' + L.week + "</span>" + scoreBadge + "</div>";
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

  /* ---------------- lecture page ---------------- */
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
    var s = lstate(L.id);
    var caseTotal = caseQuestionCount(L);
    var caseDoneN = revealedCount(L);
    var essayN = essaysOpened(L);
    var html = '<a class="back-link" href="#/">← All lectures</a>';
    html += '<span class="pill" style="margin-left:10px">Week ' + L.week + "</span>";
    html += "<h1>" + esc(L.title) + "</h1>";
    html += '<p class="lead">' + esc(L.blurb) + "</p>";

    html += '<div class="quiz-launcher">';
    html += '<button class="launch" data-go="#/lecture/' + L.id + '/mcq"><strong>📝 MCQ Quiz</strong><small>' + L.mcqs.length + " questions · " + (s.mcqBest != null ? "best " + s.mcqBest + "%" : "not attempted") + "</small></button>";
    html += '<button class="launch" data-go="#/lecture/' + L.id + '/cases"><strong>💼 Case Studies</strong><small>' + L.cases.length + " cases · " + caseDoneN + "/" + caseTotal + " answers revealed</small></button>";
    html += '<button class="launch" data-go="#/lecture/' + L.id + '/essays"><strong>✍️ Essay Questions</strong><small>' + L.essays.length + " questions · " + essayN + "/" + L.essays.length + " reviewed</small></button>";
    html += "</div>";

    if (s.mcqWrong && s.mcqWrong.length) {
      html += '<div class="btn-row"><button class="btn small" id="retryWrongBtn">↻ Retry my ' + s.mcqWrong.length + " wrong MCQs</button></div>";
    }

    L.sections.forEach(function (sec) {
      html += "<h2>" + esc(sec.h) + "</h2>";
      html += '<div class="card">';
      sec.blocks.forEach(function (b) { html += blockHtml(b); });
      html += "</div>";
    });

    app.innerHTML = html;
    app.querySelectorAll("[data-go]").forEach(function (btn) {
      btn.addEventListener("click", function () { location.hash = btn.getAttribute("data-go"); });
    });
    var rw = document.getElementById("retryWrongBtn");
    if (rw) rw.addEventListener("click", function () { startMcq(L, true); });
  }

  /* ---------------- MCQ engine ----------------
     quiz.items = [{L, qi}] ; options shuffled per question. */
  var quiz = null;

  function startMcq(L, wrongOnly) {
    var idxs = [];
    if (wrongOnly) {
      idxs = (lstate(L.id).mcqWrong || []).slice();
      if (!idxs.length) { location.hash = "#/lecture/" + L.id + "/mcq"; return; }
    } else {
      for (var i = 0; i < L.mcqs.length; i++) idxs.push(i);
    }
    quiz = {
      mode: wrongOnly ? "wrong" : "full",
      lecture: L,
      items: idxs.map(function (qi) { return { L: L, qi: qi }; }),
      i: 0, correct: 0, wrong: [],
      backHash: "#/lecture/" + L.id
    };
    renderQuestion();
  }

  function startFinal(count) {
    var pool = [];
    COURSE.lectures.forEach(function (L) {
      L.mcqs.forEach(function (m, qi) { pool.push({ L: L, qi: qi }); });
    });
    pool = shuffle(pool);
    if (count !== "all") pool = pool.slice(0, count);
    quiz = {
      mode: "final", lecture: null,
      items: pool, i: 0, correct: 0, wrong: [],
      backHash: "#/final"
    };
    renderQuestion();
  }

  function renderQuestion() {
    var item = quiz.items[quiz.i];
    var m = item.L.mcqs[item.qi];
    var order = shuffle([0, 1, 2, 3]);
    var title = quiz.mode === "final" ? "Final Exam" :
      (quiz.mode === "wrong" ? "Retry — Week " + item.L.week : "Week " + item.L.week + " MCQ Quiz");
    var html = '<a class="back-link" href="' + quiz.backHash + '">← Exit quiz</a>';
    html += '<div class="quiz-head"><h1 style="margin:0;font-size:1.15rem">' + esc(title) + "</h1>";
    html += '<span class="pill gray">Q ' + (quiz.i + 1) + " / " + quiz.items.length + "</span></div>";
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct(quiz.i / quiz.items.length) + '%"></div></div>';
    html += '<div class="card" style="margin-top:14px">';
    html += '<p class="q-text">' + esc(m.q) + "</p>";
    html += '<div class="opts">';
    order.forEach(function (oi) {
      html += '<button class="opt" data-oi="' + oi + '">' + esc(m.o[oi]) + "</button>";
    });
    html += '</div><div id="explainSlot"></div></div>';
    app.innerHTML = html;

    var answered = false;
    app.querySelectorAll(".opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var chosen = parseInt(btn.getAttribute("data-oi"), 10);
        var right = chosen === m.a;
        if (right) quiz.correct++;
        else quiz.wrong.push(item);
        app.querySelectorAll(".opt").forEach(function (b) {
          var oi = parseInt(b.getAttribute("data-oi"), 10);
          b.setAttribute("disabled", "disabled");
          if (oi === m.a) b.classList.add("correct");
          else if (oi === chosen) b.classList.add("wrong");
          else b.classList.add("dim");
        });
        var ex = '<div class="explain">';
        ex += '<span class="verdict ' + (right ? "ok" : "no") + '">' + (right ? "✓ Correct" : "✗ Not quite") + "</span>";
        ex += esc(m.e);
        if (quiz.mode === "final") ex += '<span class="src-tag">From Week ' + item.L.week + " — " + esc(item.L.title) + "</span>";
        ex += "</div>";
        ex += '<div class="btn-row"><button class="btn primary" id="nextBtn">' + (quiz.i + 1 < quiz.items.length ? "Next question →" : "See results") + "</button></div>";
        document.getElementById("explainSlot").innerHTML = ex;
        document.getElementById("nextBtn").addEventListener("click", function () {
          quiz.i++;
          if (quiz.i < quiz.items.length) renderQuestion();
          else renderResults();
        });
        document.getElementById("nextBtn").scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    });
  }

  function renderResults() {
    var n = quiz.items.length;
    var score = pct(quiz.correct / n);

    // persist
    if (quiz.mode === "full") {
      var s = lstate(quiz.lecture.id);
      s.mcqDone = true;
      if (s.mcqBest == null || score > s.mcqBest) s.mcqBest = score;
      s.mcqWrong = quiz.wrong.map(function (it) { return it.qi; });
      save();
    } else if (quiz.mode === "wrong") {
      var s2 = lstate(quiz.lecture.id);
      var stillWrong = quiz.wrong.map(function (it) { return it.qi; });
      s2.mcqWrong = stillWrong;
      save();
    } else if (quiz.mode === "final") {
      if (store.finalBest == null || score > store.finalBest) store.finalBest = score;
      save();
    }

    var html = '<a class="back-link" href="' + quiz.backHash + '">← Back</a>';
    html += '<div class="card" style="text-align:center">';
    html += '<p class="muted" style="margin:0">' + (quiz.mode === "final" ? "Final exam result" : "Quiz result") + "</p>";
    html += '<div class="score-big">' + quiz.correct + " / " + n + "</div>";
    html += '<span class="pill ' + (score >= 80 ? "green" : "") + '">' + score + "%</span>";
    html += '<div class="btn-row" style="justify-content:center">';
    if (quiz.wrong.length) html += '<button class="btn primary" id="retryWrong">Retry the ' + quiz.wrong.length + " I got wrong</button>";
    html += '<button class="btn" id="retryAll">Retry ' + (quiz.mode === "final" ? "a new final" : "all questions") + "</button>";
    html += '<a class="btn ghost" href="' + quiz.backHash + '">Done</a>';
    html += "</div></div>";

    if (quiz.wrong.length) {
      html += '<div class="card"><h3>Review your wrong answers</h3>';
      quiz.wrong.forEach(function (it) {
        var m = it.L.mcqs[it.qi];
        html += '<div class="review-item"><strong>' + esc(m.q) + "</strong><br>";
        html += '<span class="muted">Answer: </span>' + esc(m.o[m.a]) + "<br>";
        html += '<span class="muted small">' + esc(m.e) + "</span></div>";
      });
      html += "</div>";
    }
    app.innerHTML = html;

    var wrongItems = quiz.wrong.slice();
    var mode = quiz.mode, lec = quiz.lecture, back = quiz.backHash;
    var rb = document.getElementById("retryWrong");
    if (rb) rb.addEventListener("click", function () {
      quiz = { mode: mode === "final" ? "final-wrong" : "wrong", lecture: lec, items: wrongItems, i: 0, correct: 0, wrong: [], backHash: back };
      // final-wrong retries shouldn't update lecture state:
      if (mode === "final") quiz.mode = "final-review";
      renderQuestion();
    });
    document.getElementById("retryAll").addEventListener("click", function () {
      if (mode === "final") renderFinalSetup();
      else startMcq(lec, false);
    });
  }

  /* ---------------- cases ---------------- */
  function renderCases(L) {
    var s = lstate(L.id);
    s.revealed = s.revealed || {};
    var html = '<a class="back-link" href="#/lecture/' + L.id + '">← ' + esc(L.title) + "</a>";
    html += "<h1>Case Studies — Week " + L.week + "</h1>";
    html += '<p class="lead">Try answering each question yourself (out loud or on paper) before revealing the model answer.</p>';
    L.cases.forEach(function (c, ci) {
      html += '<div class="card">';
      html += '<span class="pill">Case ' + (ci + 1) + "</span>";
      html += "<h3 style='margin-top:8px'>" + esc(c.title) + "</h3>";
      html += '<div class="scenario">' + esc(c.scenario) + "</div>";
      c.qs.forEach(function (q, qi) {
        var revealed = (s.revealed[ci] || []).indexOf(qi) !== -1;
        html += '<div class="case-q">';
        html += '<p class="q">' + (qi + 1) + ". " + esc(q.q) + "</p>";
        html += '<div id="ans-' + ci + "-" + qi + '">';
        if (revealed) html += modelAnswerHtml(q.a);
        else html += '<button class="btn small" data-ci="' + ci + '" data-qi="' + qi + '">Reveal model answer</button>';
        html += "</div></div>";
      });
      html += "</div>";
    });
    app.innerHTML = html;
    app.querySelectorAll("[data-ci]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ci = parseInt(btn.getAttribute("data-ci"), 10);
        var qi = parseInt(btn.getAttribute("data-qi"), 10);
        s.revealed[ci] = s.revealed[ci] || [];
        if (s.revealed[ci].indexOf(qi) === -1) s.revealed[ci].push(qi);
        save();
        document.getElementById("ans-" + ci + "-" + qi).innerHTML = modelAnswerHtml(L.cases[ci].qs[qi].a);
      });
    });
  }
  function modelAnswerHtml(a) {
    return '<div class="model-answer"><span class="label">Model answer</span>' + esc(a) + "</div>";
  }

  /* ---------------- essays ---------------- */
  function renderEssays(L) {
    var s = lstate(L.id);
    s.essaysOpened = s.essaysOpened || [];
    var html = '<a class="back-link" href="#/lecture/' + L.id + '">← ' + esc(L.title) + "</a>";
    html += "<h1>Essay Questions — Week " + L.week + "</h1>";
    html += '<p class="lead">Plan your answer first, then open the outline to check yourself against what a grader looks for.</p>';
    L.essays.forEach(function (e, ei) {
      html += '<div class="card">';
      html += '<span class="pill">Essay ' + (ei + 1) + "</span>";
      html += '<p class="q-text">' + esc(e.q) + "</p>";
      html += '<div id="essay-' + ei + '">';
      if (s.essaysOpened.indexOf(ei) !== -1) html += essayBodyHtml(e);
      else html += '<button class="btn small" data-ei="' + ei + '">Show model answer outline</button>';
      html += "</div></div>";
    });
    app.innerHTML = html;
    app.querySelectorAll("[data-ei]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ei = parseInt(btn.getAttribute("data-ei"), 10);
        if (s.essaysOpened.indexOf(ei) === -1) s.essaysOpened.push(ei);
        save();
        document.getElementById("essay-" + ei).innerHTML = essayBodyHtml(L.essays[ei]);
      });
    });
  }
  function essayBodyHtml(e) {
    var h = '<div class="outline-box"><span class="label">Key points a grader looks for</span><ul class="clean">';
    e.outline.forEach(function (o) { h += "<li>" + esc(o) + "</li>"; });
    h += "</ul></div>";
    h += '<div class="model-answer"><span class="label">Short full model answer</span>' + esc(e.model) + "</div>";
    return h;
  }

  /* ---------------- final exam setup ---------------- */
  function renderFinalSetup() {
    var total = 0;
    COURSE.lectures.forEach(function (L) { total += L.mcqs.length; });
    var html = '<a class="back-link" href="#/">← All lectures</a>';
    html += "<h1>Final Exam Mode</h1>";
    html += '<p class="lead">Random MCQs mixed from all 12 lectures (' + total + " in the bank). Each answer shows an explanation and its source week.</p>";
    if (store.finalBest != null) html += '<p><span class="pill green">Best so far: ' + store.finalBest + "%</span></p>";
    html += '<div class="card"><h3>How many questions?</h3>';
    html += '<div class="choice-row">';
    html += '<button class="choice sel" data-n="20">20</button>';
    html += '<button class="choice" data-n="40">40</button>';
    html += '<button class="choice" data-n="60">60</button>';
    html += '<button class="choice" data-n="all">All ' + total + "</button>";
    html += "</div>";
    html += '<div class="btn-row"><button class="btn primary" id="startFinal">Start final exam</button></div>';
    html += "</div>";
    app.innerHTML = html;
    var sel = "20";
    app.querySelectorAll(".choice").forEach(function (c) {
      c.addEventListener("click", function () {
        app.querySelectorAll(".choice").forEach(function (x) { x.classList.remove("sel"); });
        c.classList.add("sel");
        sel = c.getAttribute("data-n");
      });
    });
    document.getElementById("startFinal").addEventListener("click", function () {
      startFinal(sel === "all" ? "all" : parseInt(sel, 10));
    });
  }

  /* ---------------- go ---------------- */
  route();
})();
