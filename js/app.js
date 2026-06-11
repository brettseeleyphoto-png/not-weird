/* Not Weird — app logic.
   Two walks: "nd" (the front door) and "nt" (the other side).
   No backend, no analytics. State lives in this tab + localStorage only. */

(function () {
  "use strict";

  const C = CONTENT;
  const root = document.getElementById("app");
  const STORAGE_KEY = "notweird-v2";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- steps: scenarios + explainer per area, per mode ---------- */

  function buildSteps(mode) {
    const out = [];
    C[mode].areas.forEach((area, a) => {
      area.scenarios.forEach((_, s) => out.push({ type: "scenario", a, s }));
      out.push({ type: "explainer", a });
    });
    return out;
  }
  const STEPS = { nd: buildSteps("nd"), nt: buildSteps("nt") };

  /* ---------- state ---------- */

  let state = { view: "landing", mode: "nd", step: { nd: 0, nt: 0 }, answers: {} };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved && saved.step && typeof saved.step.nd === "number" && saved.answers) {
        state = saved;
        ["nd", "nt"].forEach((m) => {
          if (state.step[m] >= STEPS[m].length) state.step[m] = STEPS[m].length - 1;
        });
        if (!C[state.mode]) state.mode = "nd";
      }
    } catch (e) { /* private mode etc. — in-memory only is fine */ }
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* fine */ }
  }

  function reset() {
    state = { view: "landing", mode: "nd", step: { nd: 0, nt: 0 }, answers: {} };
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* fine */ }
    render();
  }

  /* ---------- resonance ---------- */

  function areaResonant(mode, a) {
    let deeply = 0, sometimes = 0;
    C[mode].areas[a].scenarios.forEach((_, s) => {
      const v = state.answers[mode + ":" + a + "-" + s];
      if (v === 0) deeply++;
      if (v === 1) sometimes++;
    });
    return deeply >= 1 || sometimes >= 2;
  }

  function resonantAreas(mode) {
    return C[mode].areas.map((_, a) => a).filter((a) => areaResonant(mode, a));
  }

  /* ---------- rendering ---------- */

  function setScreen(html, cls) {
    const swap = () => {
      root.innerHTML = '<div class="screen ' + (cls || "") + '">' + html + "</div>";
      requestAnimationFrame(() => {
        const sc = root.firstElementChild;
        if (sc) sc.classList.add("in");
        const h = root.querySelector("[data-focus]");
        if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
        window.scrollTo(0, 0);
      });
    };
    const old = root.firstElementChild;
    if (old && !REDUCED) {
      old.classList.remove("in");
      old.classList.add("out");
      setTimeout(swap, 220);
    } else {
      swap();
    }
  }

  function progressBar(mode) {
    const steps = STEPS[mode];
    const stepIdx = state.step[mode];
    const pct = ((stepIdx + 1) / steps.length) * 100;
    const a = steps[stepIdx].a;
    return (
      '<div class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></div>' +
      '<p class="crumb">' + C.ui.partLabel + " " + (a + 1) + " of " + C[mode].areas.length +
      '<span class="crumb-sep">·</span>' + C[mode].areas[a].label + "</p>"
    );
  }

  function navRow() {
    return '<div class="navrow"><button class="link" data-act="back">' + C.ui.backLabel + "</button></div>";
  }

  function renderLanding() {
    const L = C.landing;
    const html =
      '<header class="hero">' +
        '<h1 class="brand" data-focus>' + L.title + "</h1>" +
        L.lede.map((p) => '<p class="lede">' + p + "</p>").join("") +
      "</header>" +
      '<div class="isisnt">' +
        '<div class="isisnt-col"><h2>' + L.isIsnt.isTitle + "</h2><ul>" +
          L.isIsnt.is.map((i) => "<li>" + i + "</li>").join("") + "</ul></div>" +
        '<div class="isisnt-col isnt"><h2>' + L.isIsnt.isntTitle + "</h2><ul>" +
          L.isIsnt.isnt.map((i) => "<li>" + i + "</li>").join("") + "</ul></div>" +
      "</div>" +
      '<p class="privacy">' + L.privacy + "</p>" +
      '<div class="hero-actions">' +
        '<button class="btn primary" data-act="begin">' + L.begin + "</button>" +
        '<p class="time-note">' + L.timeNote + "</p>" +
      "</div>" +
      '<aside class="other-door">' +
        "<h2>" + L.otherDoor.kicker + "</h2>" +
        "<p>" + L.otherDoor.text + "</p>" +
        '<button class="btn" data-act="other-side">' + L.otherDoor.button + "</button>" +
      "</aside>" +
      '<footer class="foot">' +
        '<button class="link" data-act="story">' + L.storyLink + "</button>" +
        '<span class="crumb-sep">·</span>' +
        '<button class="link" data-act="share">' + C.share.button + "</button>" +
      "</footer>";
    setScreen(html, "landing");
  }

  function renderNtIntro() {
    const I = C.nt.intro;
    const html =
      '<header class="hero">' +
        '<h1 class="brand brand-sm" data-focus>' + I.title + "</h1>" +
        I.lede.map((p) => '<p class="lede">' + p + "</p>").join("") +
      "</header>" +
      '<div class="nt-headline">' + I.headline + "</div>" +
      '<p class="privacy">' + I.disclaimer + "</p>" +
      '<div class="hero-actions">' +
        '<button class="btn primary" data-act="nt-begin">' + I.begin + "</button>" +
        '<p class="time-note">' + I.timeNote + "</p>" +
      "</div>" +
      '<footer class="foot"><button class="link" data-act="to-landing">' + C.story.back + "</button></footer>";
    setScreen(html, "landing");
  }

  function renderStory() {
    const S = C.story;
    const html =
      '<article class="story">' +
        '<h1 data-focus>' + S.title + "</h1>" +
        S.paragraphs.map((p) => "<p>" + p + "</p>").join("") +
        '<p class="signoff">' + S.signoff + "</p>" +
        '<button class="btn ghost" data-act="story-back">' + S.back + "</button>" +
      "</article>";
    setScreen(html, "storyview");
  }

  function renderStep() {
    const mode = state.mode;
    const step = STEPS[mode][state.step[mode]];
    if (step.type === "scenario") renderScenario(mode, step);
    else renderExplainer(mode, step);
  }

  function renderScenario(mode, step) {
    const M = C[mode];
    const area = M.areas[step.a];
    const key = mode + ":" + step.a + "-" + step.s;
    const current = state.answers[key];
    const html =
      progressBar(mode) +
      '<div class="scenario">' +
        '<p class="vignette" data-focus>' + area.scenarios[step.s] + "</p>" +
        '<div class="responses">' +
          M.responses.map((r, i) =>
            '<button class="btn resp' + (current === i ? " chosen" : "") + '" data-act="answer" data-val="' + i + '">' + r + "</button>"
          ).join("") +
        "</div>" +
      "</div>" +
      navRow();
    setScreen(html, "walk");
  }

  function renderExplainer(mode, step) {
    const M = C[mode];
    const area = M.areas[step.a];
    const E = area.explainer;
    const kicker = areaResonant(mode, step.a) ? M.kickers.resonant : M.kickers.notResonant;
    const last = state.step[mode] === STEPS[mode].length - 1;
    const html =
      progressBar(mode) +
      '<article class="explainer">' +
        '<p class="kicker">' + kicker + "</p>" +
        '<h1 class="big" data-focus>' + E.headline + "</h1>" +
        '<p class="name-lead">' + M.nameLead + ' <span class="name">' + E.name + "</span></p>" +
        E.body.map((p) => '<p class="ebody">' + p + "</p>").join("") +
        '<h2 class="tools-title">' + M.toolsTitle + "</h2>" +
        '<ul class="tools">' +
          E.tools.map((t) => "<li><strong>" + t.title + "</strong> " + t.body + "</li>").join("") +
        "</ul>" +
        '<button class="btn primary" data-act="next">' + (last ? M.finishLabel : C.ui.continueLabel) + "</button>" +
      "</article>" +
      navRow();
    setScreen(html, "walk");
  }

  function renderMirror() {
    const mode = state.mode;
    const M = C[mode].mirror;
    const S = C.mirror; // shared
    const res = resonantAreas(mode);
    const low = res.length < 2;

    let top;
    if (low) {
      top = '<p class="mlead">' + M.leadLow + "</p>";
    } else {
      top =
        '<ul class="reflections">' +
          res.map((a) => "<li>" + C[mode].areas[a].mirrorLine + "</li>").join("") +
        "</ul>" +
        (mode === "nd" ? M.afterList.map((p) => '<p class="mlead">' + p + "</p>").join("") : "");
    }

    let middle = "";
    if (mode === "nt") {
      middle =
        '<div class="manifesto">' +
          M.manifesto.map((p) => "<p>" + p + "</p>").join("") +
        "</div>" +
        '<p class="mlead">' + M.afterManifesto + "</p>";
    }

    const nextGroups = mode === "nd" ? S.next : [S.next[0], S.next[1]];
    const crossDoor = mode === "nd"
      ? '<aside class="other-door"><p>' + M.otherSide.text + '</p><button class="btn" data-act="other-side">' + M.otherSide.button + "</button></aside>"
      : '<aside class="other-door"><p>' + M.frontDoor.text + '</p><button class="btn" data-act="front-door">' + M.frontDoor.button + "</button></aside>";

    const html =
      '<article class="mirror">' +
        '<h1 data-focus>' + M.title + "</h1>" +
        top +
        middle +
        '<section class="disclaimer">' +
          "<h2>" + S.disclaimerTitle + "</h2>" +
          S.disclaimer.map((p) => "<p>" + p + "</p>").join("") +
        "</section>" +
        '<h2 class="next-title">' + (mode === "nd" ? S.nextTitle : S.ntNextTitle) + "</h2>" +
        nextGroups.map((g) =>
          '<section class="next-group"><h3>' + g.title + "</h3><ul>" +
            g.items.map((i) => "<li>" + i + "</li>").join("") +
          "</ul></section>"
        ).join("") +
        '<p class="crisis">' + S.crisis + "</p>" +
        '<button class="btn primary share-btn" data-act="share">' + C.share.button + "</button>" +
        crossDoor +
        '<footer class="foot mirror-foot">' +
          '<p class="madeby">' + S.madeBy + "</p>" +
          '<button class="link" data-act="story">' + S.footerStory + "</button>" +
          '<span class="crumb-sep">·</span>' +
          '<button class="link" data-act="restart">' + S.footerRestart + "</button>" +
        "</footer>" +
      "</article>";
    setScreen(html, "mirrorview");
  }

  function render() {
    if (state.view === "landing") renderLanding();
    else if (state.view === "nt-intro") renderNtIntro();
    else if (state.view === "walk") renderStep();
    else if (state.view === "mirror") renderMirror();
  }

  /* ---------- actions ---------- */

  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;

    if (act === "begin") {
      state.mode = "nd";
      state.view = "walk";
      save(); render();
    } else if (act === "other-side") {
      state.mode = "nt";
      state.view = "nt-intro";
      save(); render();
    } else if (act === "nt-begin") {
      state.view = "walk";
      save(); render();
    } else if (act === "front-door") {
      state.mode = "nd";
      state.view = "landing";
      save(); render();
    } else if (act === "to-landing") {
      state.view = "landing";
      save(); render();
    } else if (act === "story") {
      renderStory(); // overlay; state.view unchanged
    } else if (act === "story-back") {
      render();
    } else if (act === "answer") {
      const mode = state.mode;
      const step = STEPS[mode][state.step[mode]];
      state.answers[mode + ":" + step.a + "-" + step.s] = Number(btn.dataset.val);
      advance();
    } else if (act === "next") {
      advance();
    } else if (act === "back") {
      goBack();
    } else if (act === "share") {
      share(btn);
    } else if (act === "restart") {
      if (window.confirm(C.mirror.restartConfirm)) reset();
    }
  });

  /* ---------- share: native sheet on mobile, copy-link fallback ---------- */

  async function share(btn) {
    const url = location.origin + location.pathname;
    if (navigator.share) {
      try { await navigator.share({ title: C.share.title, text: C.share.text, url }); } catch (e) { /* user closed sheet */ }
      return;
    }
    let copied = false;
    try { await navigator.clipboard.writeText(url); copied = true; } catch (e) { /* try legacy path */ }
    if (!copied) {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { copied = document.execCommand("copy"); } catch (e) { /* fall through */ }
      ta.remove();
    }
    if (copied) {
      const original = btn.textContent;
      btn.textContent = C.share.copied;
      setTimeout(() => { btn.textContent = original; }, 2200);
    } else {
      window.prompt("Copy the link:", url);
    }
  }

  function advance() {
    const mode = state.mode;
    if (state.step[mode] >= STEPS[mode].length - 1) {
      state.view = "mirror";
    } else {
      state.step[mode]++;
    }
    save(); render();
  }

  function goBack() {
    const mode = state.mode;
    if (state.step[mode] === 0) {
      state.view = mode === "nt" ? "nt-intro" : "landing";
    } else {
      state.step[mode]--;
    }
    save(); render();
  }

  /* ---------- go ---------- */

  load();
  render();
})();
