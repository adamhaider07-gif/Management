/* ============================================================
   MNGT 215 Study Hub — app logic (no frameworks, no build step).
   Routes: #/  #/lecture/:id[/mcq|cases|essays]  #/final
           #/history[/:scope]  #/settings
   Progress, quiz stats, history, and the API key live in
   localStorage under "mngt215_v1" (this device only).
   ============================================================ */
(function () {
  "use strict";

  var COURSE = window.COURSE;
  var app = document.getElementById("app");
  var LS_KEY = "mngt215_v1";
  var QUIZ_SIZE = 10;            // questions per adaptive lecture quiz
  var HISTORY_CAP = 100;         // max stored attempts
  var MARKS_CASE = 10;           // marks per case question (AI grading)
  var MARKS_ESSAY = 20;          // marks per essay (AI grading)
  var DEFAULT_MODEL = "claude-sonnet-4-20250514";

  /* ---------------- storage ---------------- */
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  var store = loadStore();
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) { /* private mode / full */ }
  }
  function lstate(id) {
    store.lectures = store.lectures || {};
    store.lectures[id] = store.lectures[id] || {};
    return store.lectures[id];
  }
  function qstats() { store.qstats = store.qstats || {}; return store.qstats; }
  function attempts() { store.attempts = store.attempts || {}; return store.attempts; }
  function history() { store.history = store.history || []; return store.history; }

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // Study-content formatter: **term** => highlight; ALL-CAPS words => key-term chips.
  function fmt(s) {
    var h = esc(s);
    h = h.replace(/\*\*(.+?)\*\*/g, '<strong class="hl">$1</strong>');
    h = h.replace(/(^|[\s(>—–-])([A-Z][A-Z0-9]{2,}(?:[ -][A-Z][A-Z0-9]{2,})*)(?![a-z])/g,
      function (m, pre, caps) { return pre + '<span class="caps">' + caps + "</span>"; });
    return h;
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
  function fmtDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short" }) + " " +
      d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  }

  /* ---------------- progress model ---------------- */
  function caseQuestionCount(L) {
    var n = 0; L.cases.forEach(function (c) { n += c.qs.length; }); return n;
  }
  function revealedCount(L) {
    var s = lstate(L.id), n = 0, r = s.revealed || {};
    Object.keys(r).forEach(function (k) { n += r[k].length; });
    return n;
  }
  function essaysOpened(L) { return (lstate(L.id).essaysOpened || []).length; }
  function lectureProgress(L) {
    var s = lstate(L.id), done = 0;
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
  var settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn) settingsBtn.addEventListener("click", function () { location.hash = "#/settings"; });

  /* ---------------- router ---------------- */
  window.addEventListener("hashchange", route);
  function route() {
    window.scrollTo(0, 0);
    var parts = (location.hash || "#/").replace(/^#\//, "").split("/");
    if (!parts[0]) return renderHome();
    if (parts[0] === "lecture") {
      var L = findLecture(parts[1]);
      if (!L) return renderHome();
      if (parts[2] === "mcq") return startQuiz(L.id, "adaptive");
      if (parts[2] === "cases") return renderCases(L);
      if (parts[2] === "essays") return renderEssays(L);
      return renderLecture(L);
    }
    if (parts[0] === "final") return renderFinalSetup();
    if (parts[0] === "history") return renderHistory(parts[1] || null);
    if (parts[0] === "settings") return renderSettings();
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
    html += '<div class="btn-row"><a class="btn small" href="#/history">🕑 Quiz history (' + history().length + ")</a>";
    html += '<a class="btn small" href="#/settings">' + (store.apiKey ? "🤖 AI marking: on" : "🤖 Set up AI marking") + "</a></div>";
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
    html += '<p class="blurb">Adaptive MCQs drawn from every week — weak topics show up more often.</p>';
    html += "</a>";
    html += "</div>";
    app.innerHTML = html;
  }

  /* ---------------- study notes rendering ---------------- */
  var CAT_META = {
    def:    { label: "Definition",        cls: "cat-def" },
    theory: { label: "Framework · Theory", cls: "cat-theory" },
    limits: { label: "Limits · Critique", cls: "cat-limits" },
    ex:     { label: "Example",           cls: "cat-ex" },
    table:  { label: "Compare",           cls: "cat-table" }
  };
  function chip(b) {
    var key = b.cat || (b.t === "def" ? "def" : b.t === "ex" ? "ex" : b.t === "table" ? "table" : null);
    if (!key || !CAT_META[key]) return { chip: "", cls: "" };
    var m = CAT_META[key];
    return { chip: '<span class="cat-chip ' + m.cls + '">' + m.label + "</span>", cls: " blk-" + key };
  }
  function blockHtml(b) {
    var c = chip(b);
    if (b.t === "def") return '<div class="def' + c.cls + '">' + c.chip + '<span class="term">' + fmt(b.term) + "</span>" + fmt(b.d) + "</div>";
    if (b.t === "p") return "<p>" + fmt(b.text) + "</p>";
    if (b.t === "ex") return '<div class="ex">' + c.chip + '<span class="term">' + fmt(b.title) + ".</span> " + fmt(b.text) + "</div>";
    if (b.t === "list") {
      var h = '<div class="blk' + c.cls + '">' + c.chip + '<p class="list-title">' + fmt(b.title) + "</p><ul class='clean'>";
      b.items.forEach(function (it) { h += "<li>" + fmt(it) + "</li>"; });
      return h + "</ul></div>";
    }
    if (b.t === "table") {
      var h2 = '<div class="blk' + c.cls + '">' + c.chip + '<p class="tbl-title">' + fmt(b.title) + '</p><div class="tbl-wrap"><table class="tbl"><thead><tr>';
      b.cols.forEach(function (col) { h2 += "<th>" + fmt(col) + "</th>"; });
      h2 += "</tr></thead><tbody>";
      b.rows.forEach(function (r) {
        h2 += "<tr>";
        r.forEach(function (cell) { h2 += "<td>" + fmt(cell) + "</td>"; });
        h2 += "</tr>";
      });
      return h2 + "</tbody></table></div></div>";
    }
    return "";
  }

  function renderLecture(L) {
    var s = lstate(L.id);
    var caseTotal = caseQuestionCount(L);
    var caseDoneN = revealedCount(L);
    var essayN = essaysOpened(L);
    var att = attempts()[L.id] || 0;
    var weakN = weakPool(L.id).length;

    var html = '<a class="back-link" href="#/">← All lectures</a>';
    html += '<span class="pill" style="margin-left:10px">Week ' + L.week + "</span>";
    html += "<h1>" + esc(L.title) + "</h1>";
    html += '<p class="lead">' + esc(L.blurb) + "</p>";

    html += '<div class="quiz-launcher">';
    html += '<button class="launch" data-go="#/lecture/' + L.id + '/mcq"><strong>📝 Adaptive MCQ Quiz</strong><small>' + QUIZ_SIZE + " of " + L.mcqs.length + " Qs · fresh mix each time · " + (s.mcqBest != null ? "best " + s.mcqBest + "% · " + att + " attempts" : "not attempted") + "</small></button>";
    html += '<button class="launch" data-go="#/lecture/' + L.id + '/cases"><strong>💼 Case Studies</strong><small>' + L.cases.length + " cases · " + caseDoneN + "/" + caseTotal + " answers revealed</small></button>";
    html += '<button class="launch" data-go="#/lecture/' + L.id + '/essays"><strong>✍️ Essay Questions</strong><small>' + L.essays.length + " questions · " + essayN + "/" + L.essays.length + " reviewed</small></button>";
    html += "</div>";

    html += '<div class="btn-row">';
    if (weakN) html += '<button class="btn small" id="weakBtn">🎯 Drill my ' + weakN + " weak questions</button>";
    html += '<a class="btn small ghost" href="#/history/' + L.id + '">🕑 History for this lecture</a>';
    html += "</div>";

    // legend + expand controls
    html += '<div class="notes-bar">';
    html += '<div class="legend">';
    html += '<span class="cat-chip cat-def">Definition</span><span class="cat-chip cat-theory">Framework · Theory</span><span class="cat-chip cat-ex">Example</span><span class="cat-chip cat-limits">Limits</span><span class="cat-chip cat-table">Compare</span>';
    html += "</div>";
    html += '<div class="exp-controls"><button class="btn small ghost" id="expandAll">Expand all</button><button class="btn small ghost" id="collapseAll">Collapse all</button></div>';
    html += "</div>";

    L.sections.forEach(function (sec, si) {
      var open = si === 0;
      var counts = sec.blocks.length;
      html += '<section class="sec card' + (open ? " open" : "") + '" data-si="' + si + '">';
      html += '<button class="sec-head" type="button"><span class="sec-title">' + esc(sec.h) + '</span><span class="sec-meta"><span class="muted small">' + counts + " items</span><span class='chev'>▾</span></span></button>";
      html += '<div class="sec-body">';
      sec.blocks.forEach(function (b) { html += blockHtml(b); });
      html += "</div></section>";
    });

    // revision checklist
    if (L.checklist && L.checklist.length) {
      var checked = s.checked || [];
      html += '<section class="sec card checklist-card open">';
      html += '<button class="sec-head" type="button"><span class="sec-title">✅ Quick revision checklist</span><span class="sec-meta"><span class="muted small" id="chkCount">' + checked.length + "/" + L.checklist.length + '</span><span class="chev">▾</span></span></button>';
      html += '<div class="sec-body"><p class="muted small" style="margin-top:0">Tick what you can do from memory. Saved on this device.</p>';
      L.checklist.forEach(function (item, i) {
        var on = checked.indexOf(i) !== -1;
        html += '<label class="chk-item' + (on ? " done" : "") + '"><input type="checkbox" data-chk="' + i + '"' + (on ? " checked" : "") + "><span>" + fmt(item) + "</span></label>";
      });
      html += "</div></section>";
    }

    app.innerHTML = html;

    app.querySelectorAll("[data-go]").forEach(function (btn) {
      btn.addEventListener("click", function () { location.hash = btn.getAttribute("data-go"); });
    });
    var wb = document.getElementById("weakBtn");
    if (wb) wb.addEventListener("click", function () { startQuiz(L.id, "weak"); });

    app.querySelectorAll(".sec-head").forEach(function (head) {
      head.addEventListener("click", function () { head.parentElement.classList.toggle("open"); });
    });
    document.getElementById("expandAll").addEventListener("click", function () {
      app.querySelectorAll(".sec").forEach(function (el) { el.classList.add("open"); });
    });
    document.getElementById("collapseAll").addEventListener("click", function () {
      app.querySelectorAll(".sec").forEach(function (el) { el.classList.remove("open"); });
    });
    app.querySelectorAll("[data-chk]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var i = parseInt(cb.getAttribute("data-chk"), 10);
        s.checked = s.checked || [];
        var pos = s.checked.indexOf(i);
        if (cb.checked && pos === -1) s.checked.push(i);
        if (!cb.checked && pos !== -1) s.checked.splice(pos, 1);
        cb.closest(".chk-item").classList.toggle("done", cb.checked);
        var cc = document.getElementById("chkCount");
        if (cc) cc.textContent = s.checked.length + "/" + L.checklist.length;
        save();
      });
    });
  }

  /* ================= ADAPTIVE QUIZ ENGINE =================
     Per-question stats: store.qstats["w5:3"] = {seen, wrong, lastRight, lastAttempt}
     Scope = lecture id, or "final". Attempt counters in store.attempts[scope].
     Rules:
       - quiz is a weighted random subset; wrong-rate raises the weight
       - a question answered RIGHT in the immediately preceding attempt of
         the same scope is excluded from the next one
       - the exact same set as last time is re-drawn when avoidable      */
  function qkey(lec, qi) { return lec + ":" + qi; }
  function statFor(scope, key) {
    var st = qstats();
    st[scope] = st[scope] || {};
    return st[scope][key];
  }
  function bankFor(scope) {
    var bank = [];
    if (scope === "final") {
      COURSE.lectures.forEach(function (L) {
        L.mcqs.forEach(function (m, qi) { bank.push({ lec: L.id, qi: qi, L: L }); });
      });
    } else {
      var L = findLecture(scope);
      L.mcqs.forEach(function (m, qi) { bank.push({ lec: L.id, qi: qi, L: L }); });
    }
    return bank;
  }
  function weakPool(scope) {
    return bankFor(scope).filter(function (it) {
      var st = statFor(scope, qkey(it.lec, it.qi));
      return st && st.wrong > 0;
    });
  }
  function weightOf(scope, it, attemptN) {
    var st = statFor(scope, qkey(it.lec, it.qi));
    if (!st || !st.seen) return 2.5;                       // unseen: priority
    var w = 1 + 4 * (st.wrong / st.seen);                  // spaced repetition: wrong → frequent
    if (st.lastAttempt != null && attemptN - st.lastAttempt >= 3) w += 0.75; // not seen lately
    if (st.lastRight === false) w += 1;                    // most recently wrong
    return w;
  }
  function buildQuiz(scope, size, mode) {
    var attemptN = attempts()[scope] || 0;       // completed attempts so far
    var bank = mode === "weak" ? weakPool(scope) : bankFor(scope);
    // exclusion: right in the immediately preceding attempt → not in this one
    var pool = bank.filter(function (it) {
      var st = statFor(scope, qkey(it.lec, it.qi));
      return !(st && st.lastRight === true && st.lastAttempt === attemptN);
    });
    if (!pool.length) pool = bank;               // safety net (empty weak pool etc.)
    var n = Math.min(size, pool.length);

    function draw() {
      var candidates = pool.slice(), picked = [];
      while (picked.length < n && candidates.length) {
        var total = 0, weights = candidates.map(function (it) {
          var w = weightOf(scope, it, attemptN); total += w; return w;
        });
        var r = Math.random() * total, acc = 0, idx = 0;
        for (var i = 0; i < weights.length; i++) { acc += weights[i]; if (r <= acc) { idx = i; break; } }
        picked.push(candidates.splice(idx, 1)[0]);
      }
      return picked;
    }
    var sig, set, tries = 0;
    var lastSig = (store.lastSet || {})[scope];
    do {
      set = draw();
      sig = set.map(function (it) { return qkey(it.lec, it.qi); }).sort().join("|");
      tries++;
    } while (sig === lastSig && pool.length > n && tries < 6);
    store.lastSet = store.lastSet || {};
    store.lastSet[scope] = sig;
    save();
    return shuffle(set);
  }

  var quiz = null;
  function startQuiz(scope, mode, size) {
    var items = buildQuiz(scope, size || QUIZ_SIZE, mode);
    quiz = {
      scope: scope, mode: mode,
      items: items, i: 0, correct: 0, wrong: [],
      log: [],
      backHash: scope === "final" ? "#/final" : "#/lecture/" + scope
    };
    renderQuestion();
  }
  function startFinal(count) {
    startQuiz("final", "adaptive", count === "all" ? 9999 : count);
  }

  function renderQuestion() {
    var item = quiz.items[quiz.i];
    var m = item.L.mcqs[item.qi];
    var order = shuffle([0, 1, 2, 3]);
    var title = quiz.scope === "final" ? "Final Exam" :
      (quiz.mode === "weak" ? "Weak-spot drill — Week " + item.L.week : "Week " + item.L.week + " Adaptive Quiz");
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
        if (right) quiz.correct++; else quiz.wrong.push(item);

        // per-question stats (drives the adaptive weighting)
        var st = qstats();
        st[quiz.scope] = st[quiz.scope] || {};
        var key = qkey(item.lec, item.qi);
        var rec = st[quiz.scope][key] || { seen: 0, wrong: 0 };
        rec.seen++;
        if (!right) rec.wrong++;
        rec.lastRight = right;
        rec.lastAttempt = (attempts()[quiz.scope] || 0) + 1; // the attempt now in progress
        st[quiz.scope][key] = rec;
        save();

        // full history log entry for this question
        quiz.log.push({
          week: item.L.week, lec: item.lec, qi: item.qi,
          q: m.q, chosen: m.o[chosen], correct: m.o[m.a], ok: right
        });

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
        if (quiz.scope === "final") ex += '<span class="src-tag">From Week ' + item.L.week + " — " + esc(item.L.title) + "</span>";
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
    var scope = quiz.scope;

    // close out the attempt: bump counter, persist score + history
    attempts()[scope] = (attempts()[scope] || 0) + 1;
    if (scope === "final") {
      if (store.finalBest == null || score > store.finalBest) store.finalBest = score;
    } else if (quiz.mode !== "weak") {
      var s = lstate(scope);
      s.mcqDone = true;
      if (s.mcqBest == null || score > s.mcqBest) s.mcqBest = score;
    } else {
      lstate(scope).mcqDone = true;
    }
    var h = history();
    h.push({ ts: Date.now(), scope: scope, mode: quiz.mode, score: quiz.correct, total: n, items: quiz.log });
    while (h.length > HISTORY_CAP) h.shift();
    save();

    var html = '<a class="back-link" href="' + quiz.backHash + '">← Back</a>';
    html += '<div class="card" style="text-align:center">';
    html += '<p class="muted" style="margin:0">' + (scope === "final" ? "Final exam result" : "Quiz result") + "</p>";
    html += '<div class="score-big">' + quiz.correct + " / " + n + "</div>";
    html += '<span class="pill ' + (score >= 80 ? "green" : "") + '">' + score + "%</span>";
    html += '<p class="muted small" style="margin:10px 0 0">Next attempt is regenerated: questions you missed will come back more often, and the ones you just got right sit out the next round.</p>';
    html += '<div class="btn-row" style="justify-content:center">';
    html += '<button class="btn primary" id="newQuiz">↻ New ' + (scope === "final" ? "final exam" : "adaptive quiz") + "</button>";
    html += '<a class="btn ghost" href="' + quiz.backHash + '">Done</a>';
    html += '<a class="btn ghost" href="#/history/' + scope + '">View history</a>';
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
    var lastSize = n;
    document.getElementById("newQuiz").addEventListener("click", function () {
      if (scope === "final") startQuiz("final", "adaptive", lastSize);
      else startQuiz(scope, "adaptive");
    });
  }

  /* ---------------- history ---------------- */
  function scopeName(scope) {
    if (scope === "final") return "Final Exam";
    var L = findLecture(scope);
    return L ? "Week " + L.week + " — " + L.title : scope;
  }
  function renderHistory(filter) {
    var all = history().slice().reverse();
    var rows = filter ? all.filter(function (a) { return a.scope === filter; }) : all;
    var html = '<a class="back-link" href="' + (filter && filter !== "final" ? "#/lecture/" + filter : "#/") + '">← Back</a>';
    html += "<h1>Quiz History" + (filter ? " — " + esc(scopeName(filter)) : "") + "</h1>";
    html += '<p class="lead">Every attempt is logged with your answer, the correct answer, and the time. Stored on this device (last ' + HISTORY_CAP + " attempts).</p>";
    if (!rows.length) {
      html += '<div class="card"><p class="muted">No attempts yet' + (filter ? " for this lecture" : "") + ". Take a quiz and it will appear here.</p></div>";
    } else {
      rows.forEach(function (a, i) {
        var scorePct = pct(a.score / a.total);
        html += '<div class="card hist-card">';
        html += '<button class="hist-head" data-h="' + i + '">';
        html += '<span><strong>' + esc(scopeName(a.scope)) + "</strong>" + (a.mode === "weak" ? ' <span class="pill gray">weak-spot drill</span>' : "") + '<br><small class="muted">' + fmtDate(a.ts) + "</small></span>";
        html += '<span class="hist-score"><span class="pill ' + (scorePct >= 80 ? "green" : scorePct >= 50 ? "gray" : "red") + '">' + a.score + "/" + a.total + " · " + scorePct + '%</span><span class="chev">▾</span></span>';
        html += "</button>";
        html += '<div class="hist-body" id="hist-' + i + '">';
        a.items.forEach(function (it) {
          html += '<div class="hist-q ' + (it.ok ? "ok" : "no") + '">';
          html += '<p class="q">' + (it.ok ? "✓" : "✗") + " " + esc(it.q) + "</p>";
          html += '<p class="small"><span class="muted">Your answer:</span> ' + esc(it.chosen) + "</p>";
          if (!it.ok) html += '<p class="small"><span class="muted">Correct answer:</span> ' + esc(it.correct) + "</p>";
          html += "</div>";
        });
        html += "</div></div>";
      });
      html += '<div class="btn-row"><button class="btn small ghost" id="clearHist">Clear history</button></div>';
    }
    app.innerHTML = html;
    app.querySelectorAll(".hist-head").forEach(function (head) {
      head.addEventListener("click", function () { head.parentElement.classList.toggle("open"); });
    });
    var ch = document.getElementById("clearHist");
    if (ch) ch.addEventListener("click", function () {
      if (!confirm("Delete all stored quiz history? (Your scores and adaptive stats are kept.)")) return;
      store.history = [];
      save(); renderHistory(filter);
    });
  }

  /* ---------------- AI grading (Claude API) ---------------- */
  function aiKey() { return store.apiKey || ""; }
  function aiModel() { return store.aiModel || DEFAULT_MODEL; }

  function resizeImage(file, maxDim) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error("Could not read the photo.")); };
      reader.onload = function () {
        var img = new Image();
        img.onerror = function () { reject(new Error("That file is not a readable image.")); };
        img.onload = function () {
          var w = img.width, hgt = img.height;
          var scale = Math.min(1, maxDim / Math.max(w, hgt));
          var cw = Math.round(w * scale), chh = Math.round(hgt * scale);
          var canvas = document.createElement("canvas");
          canvas.width = cw; canvas.height = chh;
          canvas.getContext("2d").drawImage(img, 0, 0, cw, chh);
          var dataUrl = canvas.toDataURL("image/jpeg", 0.85);
          resolve(dataUrl.split(",")[1]);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function gradePrompt(kind, payload) {
    var marks = payload.marks;
    var p = "You are the exam grader for MNGT 215 — Fundamentals of Management and Organizational Behavior (American University of Beirut), taught from Robbins, Coulter & Long (2024), Management, 16th Global Edition.\n\n";
    p += "The attached photo(s) show a student's HANDWRITTEN answer. Read the handwriting carefully; if a part is illegible, say so rather than guessing.\n\n";
    if (kind === "case") {
      p += "CASE SCENARIO:\n" + payload.scenario + "\n\n";
      p += "QUESTION (worth " + marks + " marks):\n" + payload.q + "\n\n";
      p += "MODEL ANSWER (full-mark answer):\n" + payload.model + "\n\n";
    } else {
      p += "ESSAY QUESTION (worth " + marks + " marks):\n" + payload.q + "\n\n";
      p += "KEY POINTS A GRADER LOOKS FOR:\n- " + payload.outline.join("\n- ") + "\n\n";
      p += "MODEL ANSWER:\n" + payload.model + "\n\n";
    }
    p += "Grade like a fair university examiner: award partial credit for partially correct points, use the course terminology, and judge substance over style. Do not penalize spelling or grammar.\n\n";
    p += 'Respond with ONLY a valid JSON object (no markdown fences, no extra text), exactly this shape:\n';
    p += '{"score": <number between 0 and ' + marks + ', decimals allowed>, "total": ' + marks + ', "correct": ["specific point the student got right", "..."], "missing": ["specific required point that is missing or wrong", "..."], "advice": "2-3 sentences of concrete exam advice for this student"}';
    return p;
  }

  function callClaude(images, prompt) {
    var content = images.map(function (b64) {
      return { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64 } };
    });
    content.push({ type: "text", text: prompt });
    return fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": aiKey(),
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: aiModel(),
        max_tokens: 1500,
        messages: [{ role: "user", content: content }]
      })
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) {
        if (!res.ok) {
          var msg = (body && body.error && body.error.message) || ("HTTP " + res.status);
          if (res.status === 401) msg = "Invalid API key — check it in AI Settings.";
          if (res.status === 404) msg = "Model not found (" + aiModel() + "). It may be retired — change the model in AI Settings (e.g., claude-sonnet-4-6).";
          if (res.status === 429) msg = "Rate limited by the API — wait a minute and try again.";
          if (res.status === 413) msg = "Photos too large — try fewer or clearer photos.";
          if (res.status >= 500) msg = "The API is temporarily overloaded — try again shortly.";
          throw new Error(msg);
        }
        var text = "";
        (body.content || []).forEach(function (blk) { if (blk.type === "text") text += blk.text; });
        return text;
      });
    }, function () {
      throw new Error("Network error — check your connection (and that nothing blocks api.anthropic.com).");
    });
  }

  function parseFeedback(text, marks) {
    var m = text.match(/\{[\s\S]*\}/);
    if (!m) throw new Error("The AI reply was not in the expected format. Try again.");
    var obj = JSON.parse(m[0]);
    var score = Math.max(0, Math.min(marks, Number(obj.score) || 0));
    return {
      score: Math.round(score * 2) / 2,
      total: marks,
      correct: Array.isArray(obj.correct) ? obj.correct.map(String) : [],
      missing: Array.isArray(obj.missing) ? obj.missing.map(String) : [],
      advice: String(obj.advice || "")
    };
  }

  function feedbackHtml(fb) {
    var p = fb.total ? fb.score / fb.total : 0;
    var cls = p >= 0.7 ? "green" : p >= 0.45 ? "gray" : "red";
    var h = '<div class="ai-feedback">';
    h += '<div class="ai-head"><span class="ai-title">🤖 AI feedback</span><span class="pill ' + cls + '">' + fb.score + " / " + fb.total + " marks</span></div>";
    h += '<div class="ai-bar"><div class="ai-bar-fill" style="width:' + pct(p) + '%"></div></div>';
    if (fb.correct.length) {
      h += '<p class="ai-sub ok">✓ What you got right</p><ul class="clean">';
      fb.correct.forEach(function (x) { h += "<li>" + esc(x) + "</li>"; });
      h += "</ul>";
    }
    if (fb.missing.length) {
      h += '<p class="ai-sub no">✗ What was missing or wrong</p><ul class="clean">';
      fb.missing.forEach(function (x) { h += "<li>" + esc(x) + "</li>"; });
      h += "</ul>";
    }
    if (fb.advice) h += '<p class="ai-sub">💡 Advice</p><p class="small">' + esc(fb.advice) + "</p>";
    if (fb.ts) h += '<p class="muted small" style="margin-bottom:0">Marked ' + fmtDate(fb.ts) + " · " + esc(fb.model || "") + "</p>";
    h += "</div>";
    return h;
  }

  // One submission widget per question. key examples: "c0-2" (case 1, q3), "e1" (essay 2).
  function submitWidgetHtml(L, key, marks) {
    var fb = (lstate(L.id).aiFb || {})[key];
    var h = '<div class="submit-zone" data-key="' + key + '">';
    if (fb) h += feedbackHtml(fb);
    h += '<button class="btn small ghost ai-open">📷 ' + (fb ? "Re-submit a photo answer" : "Submit your answer (photo) for AI marking") + "</button>";
    h += '<div class="ai-panel" hidden>';
    if (!aiKey()) {
      h += '<p class="small">AI marking needs your Anthropic API key (used only from this device). <a href="#/settings"><strong>Set it up →</strong></a></p>';
    } else {
      h += '<p class="small muted" style="margin-top:0">Photograph your handwritten answer (up to 3 photos for multiple pages). Graded out of ' + marks + " marks against the model answer.</p>";
      h += '<input type="file" accept="image/*" capture="environment" multiple class="ai-file">';
      h += '<div class="thumbs"></div>';
      h += '<div class="btn-row"><button class="btn primary small ai-send" disabled>Get AI feedback</button><span class="ai-status muted small"></span></div>';
    }
    h += "</div></div>";
    return h;
  }

  function wireSubmitZones(L, payloadFor) {
    app.querySelectorAll(".submit-zone").forEach(function (zone) {
      var key = zone.getAttribute("data-key");
      var openBtn = zone.querySelector(".ai-open");
      var panel = zone.querySelector(".ai-panel");
      openBtn.addEventListener("click", function () {
        panel.hidden = !panel.hidden;
      });
      var fileInput = zone.querySelector(".ai-file");
      if (!fileInput) return; // no API key — panel only links to settings
      var sendBtn = zone.querySelector(".ai-send");
      var statusEl = zone.querySelector(".ai-status");
      var thumbs = zone.querySelector(".thumbs");
      var images = [];

      fileInput.addEventListener("change", function () {
        var files = Array.prototype.slice.call(fileInput.files, 0, 3);
        if (!files.length) return;
        statusEl.textContent = "Preparing photo" + (files.length > 1 ? "s" : "") + "…";
        sendBtn.disabled = true;
        Promise.all(files.map(function (f) { return resizeImage(f, 1568); })).then(function (b64s) {
          images = b64s;
          thumbs.innerHTML = b64s.map(function (b) {
            return '<img class="thumb" src="data:image/jpeg;base64,' + b + '" alt="your answer">';
          }).join("");
          statusEl.textContent = images.length + " photo" + (images.length > 1 ? "s" : "") + " ready.";
          sendBtn.disabled = false;
        }).catch(function (err) {
          statusEl.textContent = err.message;
        });
      });

      sendBtn.addEventListener("click", function () {
        if (!images.length) return;
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span class="spinner"></span> Marking…';
        statusEl.textContent = "Sent to Claude — this usually takes 5–20 seconds.";
        var payload = payloadFor(key);
        callClaude(images, gradePrompt(payload.kind, payload))
          .then(function (text) {
            var fb = parseFeedback(text, payload.marks);
            fb.ts = Date.now();
            fb.model = aiModel();
            var s = lstate(L.id);
            s.aiFb = s.aiFb || {};
            s.aiFb[key] = fb;
            save();
            var old = zone.querySelector(".ai-feedback");
            if (old) old.remove();
            zone.insertAdjacentHTML("afterbegin", feedbackHtml(fb));
            panel.hidden = true;
            openBtn.textContent = "📷 Re-submit a photo answer";
            statusEl.textContent = "";
            sendBtn.disabled = false;
            sendBtn.textContent = "Get AI feedback";
          })
          .catch(function (err) {
            statusEl.textContent = "⚠️ " + err.message;
            sendBtn.disabled = false;
            sendBtn.textContent = "Get AI feedback";
          });
      });
    });
  }

  /* ---------------- cases ---------------- */
  function renderCases(L) {
    var s = lstate(L.id);
    s.revealed = s.revealed || {};
    var html = '<a class="back-link" href="#/lecture/' + L.id + '">← ' + esc(L.title) + "</a>";
    html += "<h1>Case Studies — Week " + L.week + "</h1>";
    html += '<p class="lead">Write your answer first (paper works best), then reveal the model answer — or photograph yours for AI marking out of ' + MARKS_CASE + " marks per question.</p>";
    L.cases.forEach(function (c, ci) {
      html += '<div class="card">';
      html += '<span class="pill">Case ' + (ci + 1) + "</span>";
      html += "<h3 style='margin-top:8px'>" + esc(c.title) + "</h3>";
      html += '<div class="scenario">' + esc(c.scenario) + "</div>";
      c.qs.forEach(function (q, qi) {
        var revealed = (s.revealed[ci] || []).indexOf(qi) !== -1;
        html += '<div class="case-q">';
        html += '<p class="q">' + (qi + 1) + ". " + esc(q.q) + ' <span class="pill gray">' + MARKS_CASE + " marks</span></p>";
        html += '<div id="ans-' + ci + "-" + qi + '">';
        if (revealed) html += modelAnswerHtml(q.a);
        else html += '<button class="btn small" data-ci="' + ci + '" data-qi="' + qi + '">Reveal model answer</button>';
        html += "</div>";
        html += submitWidgetHtml(L, "c" + ci + "-" + qi, MARKS_CASE);
        html += "</div>";
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
    wireSubmitZones(L, function (key) {
      var m = key.match(/^c(\d+)-(\d+)$/);
      var c = L.cases[+m[1]], q = c.qs[+m[2]];
      return { kind: "case", marks: MARKS_CASE, scenario: c.title + ". " + c.scenario, q: q.q, model: q.a };
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
    html += '<p class="lead">Plan and write your answer, then check the outline — or photograph your essay for AI marking out of ' + MARKS_ESSAY + " marks.</p>";
    L.essays.forEach(function (e, ei) {
      html += '<div class="card">';
      html += '<span class="pill">Essay ' + (ei + 1) + '</span> <span class="pill gray">' + MARKS_ESSAY + " marks</span>";
      html += '<p class="q-text">' + esc(e.q) + "</p>";
      html += '<div id="essay-' + ei + '">';
      if (s.essaysOpened.indexOf(ei) !== -1) html += essayBodyHtml(e);
      else html += '<button class="btn small" data-ei="' + ei + '">Show model answer outline</button>';
      html += "</div>";
      html += submitWidgetHtml(L, "e" + ei, MARKS_ESSAY);
      html += "</div>";
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
    wireSubmitZones(L, function (key) {
      var e = L.essays[+key.slice(1)];
      return { kind: "essay", marks: MARKS_ESSAY, q: e.q, outline: e.outline, model: e.model };
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
    var att = attempts()["final"] || 0;
    var html = '<a class="back-link" href="#/">← All lectures</a>';
    html += "<h1>Final Exam Mode</h1>";
    html += '<p class="lead">Adaptive MCQs mixed from all 12 lectures (' + total + " in the bank). Questions you miss come back more often; questions you just aced sit out the next round.</p>";
    if (store.finalBest != null) html += '<p><span class="pill green">Best so far: ' + store.finalBest + "%</span> <span class='pill gray'>" + att + " attempts</span></p>";
    html += '<div class="card"><h3>How many questions?</h3>';
    html += '<div class="choice-row">';
    html += '<button class="choice sel" data-n="20">20</button>';
    html += '<button class="choice" data-n="40">40</button>';
    html += '<button class="choice" data-n="60">60</button>';
    html += '<button class="choice" data-n="all">Everything eligible</button>';
    html += "</div>";
    html += '<div class="btn-row"><button class="btn primary" id="startFinal">Start final exam</button><a class="btn ghost" href="#/history/final">History</a></div>';
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

  /* ---------------- settings ---------------- */
  function renderSettings() {
    var html = '<a class="back-link" href="#/">← Home</a>';
    html += "<h1>AI Marking Settings</h1>";
    html += '<p class="lead">Photo answers are sent straight from this browser to the Claude API with your own key. The key is stored only on this device and never leaves it except to api.anthropic.com.</p>';
    html += '<div class="card">';
    html += '<h3>Anthropic API key</h3>';
    html += '<p class="small muted">Create one at console.anthropic.com → API keys. Usage is billed to your Anthropic account (a graded photo costs roughly $0.01–0.03).</p>';
    html += '<input type="password" id="keyInput" class="text-input" placeholder="sk-ant-…" value="' + esc(aiKey()) + '" autocomplete="off">';
    html += '<h3 style="margin-top:18px">Model</h3>';
    html += '<input type="text" id="modelInput" class="text-input" value="' + esc(aiModel()) + '" autocomplete="off">';
    html += '<p class="small muted">Default: claude-sonnet-4-20250514. ⚠️ Anthropic retires this model on <strong>June 15, 2026</strong> — if marking stops working, change this to <code>claude-sonnet-4-6</code>.</p>';
    html += '<div class="btn-row">';
    html += '<button class="btn primary" id="saveKey">Save</button>';
    html += '<button class="btn" id="testKey"' + (aiKey() ? "" : " disabled") + ">Test connection</button>";
    html += '<button class="btn ghost" id="clearKey">Remove key</button>';
    html += "</div>";
    html += '<p class="small" id="settingsStatus"></p>';
    html += "</div>";
    html += '<div class="card flat"><h3>Privacy note</h3><p class="small muted" style="margin-bottom:0">Anyone with access to this browser profile could read the stored key. Use it on your own device only, and revoke the key from the Anthropic console if you ever share or lose the device.</p></div>';
    app.innerHTML = html;

    var statusEl = document.getElementById("settingsStatus");
    document.getElementById("saveKey").addEventListener("click", function () {
      var k = document.getElementById("keyInput").value.trim();
      var mdl = document.getElementById("modelInput").value.trim() || DEFAULT_MODEL;
      store.apiKey = k;
      store.aiModel = mdl;
      save();
      statusEl.textContent = k ? "✓ Saved. AI marking is enabled on case-study and essay pages." : "Key removed.";
      document.getElementById("testKey").disabled = !k;
    });
    document.getElementById("clearKey").addEventListener("click", function () {
      store.apiKey = ""; save();
      document.getElementById("keyInput").value = "";
      statusEl.textContent = "Key removed from this device.";
      document.getElementById("testKey").disabled = true;
    });
    document.getElementById("testKey").addEventListener("click", function () {
      statusEl.textContent = "Testing…";
      // save current field values first so the test uses them
      store.apiKey = document.getElementById("keyInput").value.trim();
      store.aiModel = document.getElementById("modelInput").value.trim() || DEFAULT_MODEL;
      save();
      fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": aiKey(),
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({ model: aiModel(), max_tokens: 16, messages: [{ role: "user", content: "Reply with exactly: OK" }] })
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (body) {
          if (res.ok) statusEl.textContent = "✓ Connection works — model " + aiModel() + " responded.";
          else statusEl.textContent = "✗ " + ((body.error && body.error.message) || ("HTTP " + res.status));
        });
      }).catch(function () {
        statusEl.textContent = "✗ Network/CORS error — check your connection.";
      });
    });
  }

  /* ---------------- go ---------------- */
  route();
})();
