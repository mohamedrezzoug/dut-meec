// الصفحات الإضافية: الحاسبات، ورقة القوانين، القاموس، التدريب، الامتحانات، ملفاتي، المزيد
import { t, tv, L, tr, lang, LANGS } from './i18n.js?v=3';
import { CALCS, FORMULAS, nf } from './tools.js?v=3';
import { addFile, allFiles, getFile, delFile, setMod, fsz, ficon, usage } from './files.js?v=3';

let C; // السياق (S، save، toast، MODS…)
export function init(ctx) { C = ctx; }
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const modOpt = (sel, all = true) => (all ? `<option value="all">${t('all')}</option>` : '') + C.MODS.map(m => `<option value="${m.id}" ${sel === m.id ? 'selected' : ''}>${m.em} ${esc(L(m.name))}</option>`).join('');

// ================================================= الحاسبات
let calcMod = 'all';
export function vTools(a) {
  if (a) calcMod = a;
  const list = CALCS.filter(c => calcMod === 'all' || c.mod === calcMod);
  return `<div class="hrow"><h1>🧮 ${t('tools')}</h1><a class="btn" href="#formulas">📐 ${t('formulas')}</a></div><p class="muted">${t('calcHint')}</p>
  <div class="filters"><select id="cMod">${modOpt(calcMod)}</select></div>
  <div class="calcs">${list.map(c => { const m = C.MOD[c.mod]; return `<div class="card calc" style="--c:${m.color}" id="calc-${c.id}"><div class="hrow"><h3>${esc(L(c.t))}</h3><a class="tag" href="#mod/${m.id}">${m.em} ${esc(L(m.name))}</a></div>
    <div class="fields">${c.f.map((f, i) => `<label>${esc(L(f[0]))}<input data-calc="${c.id}" data-i="${i}" value="${esc(f[1])}" inputmode="${c.raw ? 'text' : 'decimal'}" dir="ltr"></label>`).join('')}</div><div class="out" id="out-${c.id}"></div></div>`; }).join('')}</div>`;
}
function runCalc(id) {
  const c = CALCS.find(x => x.id === id), vals = [...document.querySelectorAll(`[data-calc="${id}"]`)].map(i => i.value), out = $('#out-' + id);
  try { const v = c.raw ? vals : vals.map(s => { const n = Number(String(s).replace(/\s/g, '').replace(',', '.')); if (s === '' || isNaN(n)) throw 0; return n; }); out.innerHTML = c.run(v); out.classList.remove('err'); }
  catch (e) { out.textContent = t('badInput'); out.classList.add('err'); }
}
export function bindTools() {
  $('#cMod').onchange = e => { location.hash = 'tools/' + e.target.value; };
  document.querySelectorAll('[data-calc]').forEach(i => i.oninput = () => runCalc(i.dataset.calc));
  CALCS.forEach(c => { if ($('#out-' + c.id)) runCalc(c.id); });
}
// ================================================= ورقة القوانين
export function vFormulas() {
  return `<div class="hrow"><h1>📐 ${t('formulas')}</h1><div class="row2 noprint"><a class="btn" href="#tools">🧮 ${t('tools')}</a><button class="btn" onclick="print()">${t('printForm')}</button></div></div>
  ${Object.keys(FORMULAS).map(k => { const m = C.MOD[k]; return `<div class="card fsheet" style="--c:${m.color}"><h2>${m.em} ${esc(L(m.name))}</h2><table>${FORMULAS[k].map(f => `<tr><td>${esc(L(f[0]))}</td><td class="fm" dir="ltr">${esc(f[1])}</td></tr>`).join('')}</table><a class="btn sm noprint" href="#tools/${k}">🧮 ${t('openCalc')}</a></div>`; }).join('')}`;
}
// ================================================= القاموس
let dMod = 'all', dQ = '';
export function vDict() {
  const all = []; C.MODS.forEach(m => m.gloss.forEach(g => all.push({ m, g })));
  const q = dQ.trim().toLowerCase();
  const list = all.filter(x => (dMod === 'all' || x.m.id === dMod) && (!q || (x.g.slice(0, 3).join(' ') + ' ' + L(x.g[3])).toLowerCase().includes(q))).sort((a, b) => a.g[0].localeCompare(b.g[0], 'fr'));
  return `<h1>📖 ${t('dict')}</h1><p class="muted">${t('dictHelp')} (${all.length} ${t('terms')})</p>
  <div class="filters"><select id="dMod">${modOpt(dMod)}</select><input id="dQ" value="${esc(dQ)}" placeholder="${t('filter')}"><span class="score">${list.length}</span></div>
  <div class="dict">${list.map(({ m, g }) => `<div class="card dterm" style="--c:${m.color}"><div class="tri"><b>${esc(g[0])}</b><button class="mini" data-say="${esc(g[0])}" data-sl="fr">🔊</button></div>
  <div class="tri"><span dir="rtl" class="ar">${esc(g[1])}</span><button class="mini" data-say="${esc(g[1])}" data-sl="ar">🔊</button></div><div class="tri"><i>${esc(g[2])}</i><button class="mini" data-say="${esc(g[2])}" data-sl="en">🔊</button></div>
  <p>${esc(L(g[3]))}</p><a class="tag" href="#mod/${m.id}">${m.em} ${esc(L(m.name))}</a></div>`).join('')}</div>`;
}
export function say(txt, l) { if (!('speechSynthesis' in window)) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(txt); u.lang = { fr: 'fr-FR', ar: 'ar-MA', en: 'en-GB' }[l]; const v = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(l)); if (v) u.voice = v; speechSynthesis.speak(u); }
export function bindDict() {
  $('#dMod').onchange = e => { dMod = e.target.value; C.render(); };
  const i = $('#dQ'); i.oninput = () => { dQ = i.value; clearTimeout(i._t); i._t = setTimeout(() => { C.render(); const n = $('#dQ'); n.focus(); n.setSelectionRange(n.value.length, n.value.length); }, 300); };
  document.querySelectorAll('[data-say]').forEach(b => b.onclick = () => say(b.dataset.say, b.dataset.sl));
}
// ================================================= التدريب: البطاقات، الاختبار، محاكاة الامتحان
let TR = { tab: 'flash', mod: 'all', deck: 'gloss', i: 0, flip: false, order: null, quiz: null, sim: null };
function deck() {
  const mods = C.MODS.filter(m => TR.mod === 'all' || m.id === TR.mod);
  if (TR.deck === 'form') return Object.keys(FORMULAS).filter(k => TR.mod === 'all' || k === TR.mod).flatMap(k => FORMULAS[k].map((f, i) => ({ id: 'f:' + k + i, m: C.MOD[k], front: L(f[0]), back: `<div class="fm" dir="ltr">${esc(f[1])}</div>` })));
  return mods.flatMap(m => m.gloss.map((g, i) => ({ id: 'g:' + m.id + i, m, front: lang === 'ar' ? g[1] : lang === 'en' ? g[2] : g[0], back: `<p class="def">${esc(L(g[3]))}</p><div class="tri3"><span>🇫🇷 ${esc(g[0])}</span><span dir="rtl">🇲🇦 ${esc(g[1])}</span><span>🇬🇧 ${esc(g[2])}</span></div>` })));
}
export function vTrain(a) {
  if (a && ['flash', 'quiz', 'sim'].includes(a)) TR.tab = a;
  const tabs = `<div class="seg">${['flash', 'quiz', 'sim'].map(x => `<button data-tt="${x}" class="${TR.tab === x ? 'on' : ''}">${x === 'flash' ? '🃏' : x === 'quiz' ? '❓' : '⏱️'} ${t(x)}</button>`).join('')}</div>`;
  let body = '';
  if (TR.tab === 'flash') {
    const d = deck(); if (!TR.order || TR.order.length !== d.length) { TR.order = d.map((_, i) => i); TR.i = 0; }
    const it = d[TR.order[TR.i % d.length]]; const kn = C.S.known || {}; const kc = d.filter(x => kn[x.id]).length;
    body = `<div class="filters"><select id="tMod">${modOpt(TR.mod)}</select><div class="seg sm"><button data-deck="gloss" class="${TR.deck === 'gloss' ? 'on' : ''}">${t('deckGloss')}</button><button data-deck="form" class="${TR.deck === 'form' ? 'on' : ''}">${t('deckForm')}</button></div><span class="score">✓ ${kc}/${d.length}</span></div>
    ${it ? `<div class="card flash3 ${TR.flip ? 'flip' : ''}" id="fc" style="--c:${it.m.color}"><small>${it.m.em} ${esc(L(it.m.name))} · ${TR.i % d.length + 1}/${d.length}</small><div class="front">${esc(it.front)}${kn[it.id] ? ' <span class="okt">✓</span>' : ''}</div>${TR.flip ? `<div class="back">${it.back}</div>` : `<p class="muted">${t('tapFlip')}</p>`}</div>
    <div class="row2 center2"><button class="btn" data-fc="prev">${t('prev')}</button><button class="btn" data-fc="again">${t('again')}</button><button class="btn ok" data-fc="know">${t('know')}</button><button class="btn" data-fc="shuffle">⇄ ${t('shuffle')}</button><button class="btn" data-fc="next">${t('next')}</button></div>` : ''}`;
  } else if (TR.tab === 'quiz') {
    if (!TR.quiz || TR.quiz.mod !== TR.mod) TR.quiz = { mod: TR.mod, qs: Array.from({ length: 10 }, () => C.makeEx(TR.mod, 'qcm')), i: 0, score: 0, done: false };
    const Q = TR.quiz;
    if (Q.i >= Q.qs.length) { const p = Math.round(Q.score / Q.qs.length * 100); body = `<div class="filters"><select id="tMod">${modOpt(TR.mod)}</select></div><div class="card center"><div class="big">${p >= 80 ? '🏆' : p >= 50 ? '👍' : '💪'}</div><h2>${Q.score} / ${Q.qs.length}</h2><div class="bar"><i style="width:${p}%"></i></div><button class="btn pri" id="qRe">${t('restart')}</button></div>`; }
    else body = `<div class="filters"><select id="tMod">${modOpt(TR.mod)}</select><span class="score">${t('question')} ${Q.i + 1} ${t('of')} ${Q.qs.length} · ${t('score')} ${Q.score}</span></div><div class="bar"><i style="width:${Q.i / Q.qs.length * 100}%"></i></div>${C.exCard(Q.qs[Q.i], 'qz')}<div class="row2"><button class="btn pri" id="qNext" hidden>${t('next2')}</button></div>`;
  } else body = simHTML();
  return `<h1>🎯 ${t('train')}</h1>${tabs}<div style="margin-top:14px">${body}</div>`;
}
// محاكاة الامتحان
function simHTML() {
  const s = TR.sim;
  const hist = (C.S.sims || []).slice(0, 8).map(h => `<tr><td>${h.date}</td><td>${h.mod === 'all' ? t('allMods') : esc(L(C.MOD[h.mod].name))}</td><td class="num"><b>${nf(h.note, 1)}/20</b></td></tr>`).join('');
  if (!s) return `<div class="card"><p>${t('simHelp')}</p><div class="filters"><select id="sMod">${modOpt(TR.mod)}</select><button class="btn pri" id="sGo">${t('startSim')}</button></div></div>${hist ? `<h2>${t('history')}</h2><div class="card"><table class="res">${hist}</table></div>` : ''}`;
  if (s.done) { const note = s.qs.reduce((a, q, i) => a + (s.ok[i] ? 1 : 0), 0);
    return `<div class="card center"><div class="big">${note >= 14 ? '🏆' : note >= 10 ? '👍' : '💪'}</div><h2>${t('mark')} : ${note}/20</h2><button class="btn pri" id="sNew">${t('restart')}</button></div>
    ${s.qs.map((q, i) => `<div class="card err" style="--c:${C.MOD[q.mod].color}"><small>${i + 1}. ${C.MOD[q.mod].em} ${esc(q.title)} — ${s.ok[i] ? '✅' : '❌'} ${t('answer')} : <b>${esc(s.ans[i] ?? '—')}</b></small><div class="q">${q.q}</div><details><summary>💡 ${t('solution')}</summary>${q.type === 'mcq' ? `<p>✔ <b>${q.opts[q.ans]}</b></p>` : `<p>✔ <b>${nf(q.ans, 2)} ${esc(q.unit || '')}</b></p>`}${q.sol}</details></div>`).join('')}`; }
  const q = s.qs[s.i], left = Math.max(0, Math.round((s.end - Date.now()) / 1000));
  return `<div class="filters"><span class="score">⏱️ ${t('timeLeft')} : <b id="simT">${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}</b></span><span>${t('question')} ${s.i + 1}/20</span></div><div class="dots">${s.qs.map((_, i) => `<button data-sj="${i}" class="${i === s.i ? 'cur' : ''} ${s.ans[i] != null ? 'ans' : ''}">${i + 1}</button>`).join('')}</div>
  <div class="card excard" style="--c:${C.MOD[q.mod].color}"><small>${C.MOD[q.mod].em} ${esc(L(C.MOD[q.mod].name))} · ${esc(q.title)}</small><div class="q">${q.q}</div>
  ${q.type === 'mcq' ? `<div class="opts">${q.opts.map((o, i) => `<button class="opt ${s.ans[s.i] === o ? 'sel' : ''}" data-so="${i}">${o}</button>`).join('')}</div>` : `<div class="numin"><input id="sIn" inputmode="decimal" value="${esc(s.ans[s.i] ?? '')}" placeholder="${t('answer')}">${q.unit ? `<span>${esc(q.unit)}</span>` : ''}</div>`}</div>
  <div class="row2"><button class="btn" id="sPrev">${t('prev2')}</button><button class="btn" id="sNext">${t('next2')}</button><button class="btn bad" id="sEnd">${t('finish')}</button></div>`;
}
let simIv = null;
function finishSim() { const s = TR.sim; if (!s || s.done) return; s.ok = s.qs.map((q, i) => s.ans[i] == null ? false : q.type === 'mcq' ? q.opts.indexOf(s.ans[i]) === q.ans : C.checkAns(q, s.ans[i])); s.done = true; clearInterval(simIv);
  const note = s.ok.filter(Boolean).length; C.S.sims = [{ date: C.today(), mod: s.mod, note }, ...(C.S.sims || [])].slice(0, 30);
  s.qs.forEach((q, i) => { if (!s.ok[i]) C.S.errors.unshift({ id: Date.now() + i, mod: q.mod, title: q.title, e: q, given: String(s.ans[i] ?? '—'), date: C.today() }); }); C.S.errors = C.S.errors.slice(0, 200); C.save(); C.render(); }
export function bindTrain() {
  document.querySelectorAll('[data-tt]').forEach(b => b.onclick = () => { TR.tab = b.dataset.tt; TR.flip = false; C.render(); });
  const tm = $('#tMod'); if (tm) tm.onchange = e => { TR.mod = e.target.value; TR.order = null; TR.quiz = null; C.render(); };
  document.querySelectorAll('[data-deck]').forEach(b => b.onclick = () => { TR.deck = b.dataset.deck; TR.order = null; TR.flip = false; C.render(); });
  const fc = $('#fc'); if (fc) fc.onclick = () => { TR.flip = !TR.flip; C.render(); };
  document.querySelectorAll('[data-fc]').forEach(b => b.onclick = () => { const d = deck(); const k = b.dataset.fc; const it = d[TR.order[TR.i % d.length]];
    if (k === 'know') { C.S.known = C.S.known || {}; C.S.known[it.id] = 1; C.save(); TR.i++; } else if (k === 'again') { if (C.S.known) delete C.S.known[it.id]; C.save(); TR.i++; } else if (k === 'next') TR.i++; else if (k === 'prev') TR.i = (TR.i - 1 + d.length) % d.length; else if (k === 'shuffle') { TR.order = C.shuffle(TR.order); TR.i = 0; }
    TR.flip = false; C.render(); });
  if (TR.tab === 'quiz' && TR.quiz) {
    const Q = TR.quiz; const re = $('#qRe'); if (re) re.onclick = () => { TR.quiz = null; C.render(); };
    if (Q.i < Q.qs.length) C.bindEx(Q.qs[Q.i], 'qz', ok => { if (ok) Q.score++; const n = $('#qNext'); n.hidden = false; n.onclick = () => { Q.i++; C.render(); }; });
  }
  const sg = $('#sGo'); if (sg) sg.onclick = () => { const mod = $('#sMod').value; TR.mod = mod; const qs = []; for (let i = 0; i < 20; i++) qs.push(C.makeEx(mod, i % 2 ? 'qcm' : 'calc')); TR.sim = { mod, qs, ans: {}, i: 0, end: Date.now() + 40 * 60000, done: false }; clearInterval(simIv); simIv = setInterval(() => { const el = $('#simT'); if (!TR.sim || TR.sim.done) return clearInterval(simIv); const l = Math.max(0, Math.round((TR.sim.end - Date.now()) / 1000)); if (el) el.textContent = String(Math.floor(l / 60)).padStart(2, '0') + ':' + String(l % 60).padStart(2, '0'); if (!l) finishSim(); }, 1000); C.render(); };
  const sn = $('#sNew'); if (sn) sn.onclick = () => { TR.sim = null; C.render(); };
  const s = TR.sim; if (s && !s.done) {
    const saveIn = () => { const i = $('#sIn'); if (i) s.ans[s.i] = i.value.trim() || null; };
    document.querySelectorAll('[data-so]').forEach(b => b.onclick = () => { s.ans[s.i] = s.qs[s.i].opts[+b.dataset.so]; C.render(); });
    document.querySelectorAll('[data-sj]').forEach(b => b.onclick = () => { saveIn(); s.i = +b.dataset.sj; C.render(); });
    $('#sPrev').onclick = () => { saveIn(); s.i = Math.max(0, s.i - 1); C.render(); };
    $('#sNext').onclick = () => { saveIn(); s.i = Math.min(19, s.i + 1); C.render(); };
    $('#sEnd').onclick = () => { saveIn(); finishSim(); };
    const i = $('#sIn'); if (i) i.oninput = () => { s.ans[s.i] = i.value.trim() || null; };
  }
}
// ================================================= الامتحانات
let tm = { mode: 'focus', left: 25 * 60, run: false, iv: null, f: 25, b: 5, mod: 'all' };
const fmtT = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
function beep() { try { const a = new (window.AudioContext || window.webkitAudioContext)(); [0, 0.3, 0.6].forEach(d => { const o = a.createOscillator(), g = a.createGain(); o.frequency.value = 880; o.connect(g); g.connect(a.destination); g.gain.setValueAtTime(0.2, a.currentTime + d); g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + d + 0.25); o.start(a.currentTime + d); o.stop(a.currentTime + d + 0.25); }); } catch (e) {} }
export const daysTo = d => Math.round((new Date(d + 'T12:00') - new Date(C.today() + 'T12:00')) / 864e5);
const PREP = [[P3('J−21 : faire la liste des chapitres et des TD', 'J−21: لائحة الفصول والـTD', 'D−21: list chapters and tutorials'), '📋'], [P3('J−14 : relire chaque cours, faire les fiches et les cartes', 'J−14: قراية كل درس وصاوبي البطاقات', 'D−14: re-read each lesson, make cards'), '📝'], [P3('J−10 : exercices illimités, module par module', 'J−10: التمارين بلا حدود، مادة بمادة', 'D−10: unlimited exercises, module by module'), '✏️'], [P3('J−7 : refaire les anciens DS et corriger « Mes erreurs »', 'J−7: عاودي الفروض القديمة وصححي «أخطائي»', 'D−7: redo past tests and fix “My mistakes”'), '⚠️'], [P3('J−3 : simulation d’examen chronométrée', 'J−3: محاكاة الامتحان بالوقت', 'D−3: timed exam simulation'), '⏱️'], [P3('J−1 : formulaire + cartes, puis bien dormir', 'J−1: ورقة القوانين + البطاقات، ومن بعد نعسي مزيان', 'D−1: formula sheet + cards, then sleep well'), '😴']];
function P3(fr, ar, en) { return { fr, ar, en }; }
export function vExams() {
  const ex = (C.S.exams || []).slice().sort((a, b) => a.date.localeCompare(b.date));
  const per = {}; Object.values(C.S.logMod || {}).forEach(o => Object.entries(o).forEach(([k, v]) => per[k] = (per[k] || 0) + v)); const mx = Math.max(1, ...Object.values(per));
  return `<h1>📅 ${t('exams')}</h1>
  <div class="grid2"><div class="card tmr"><h3>⏱️ ${t('timer')}</h3><div class="seg sm"><button data-tm="focus" class="${tm.mode === 'focus' ? 'on' : ''}">${t('focus')} ${tm.f}′</button><button data-tm="break" class="${tm.mode === 'break' ? 'on' : ''}">${t('brk')} ${tm.b}′</button></div>
    <div class="clock" id="tmv">${fmtT(tm.left)}</div><div class="row2 center2"><button class="btn pri" id="tmGo">${tm.run ? t('pause') : t('go')}</button><button class="btn" id="tmRe">${t('reset')}</button></div>
    <div class="filters center2"><select id="tmMod">${modOpt(tm.mod)}</select><label class="sm2">${t('focus')} <input type="number" id="tmF" value="${tm.f}" min="5" max="120"></label><label class="sm2">${t('brk')} <input type="number" id="tmB" value="${tm.b}" min="1" max="30"></label></div></div>
   <div class="card"><h3>📌 ${t('myExams')}</h3><div class="addx"><select id="xMod">${C.MODS.map(m => `<option value="${m.id}">${m.em} ${esc(L(m.name))}</option>`).join('')}</select><select id="xType"><option>DS</option><option>${tr('Examen final', 'الامتحان النهائي', 'Final exam')}</option><option>${tr('Rattrapage', 'الاستدراكي', 'Resit')}</option><option>${tr('Exposé', 'عرض', 'Presentation')}</option><option>${tr('Rapport', 'تقرير', 'Report')}</option></select><input type="date" id="xDate"><button class="btn pri" id="xAdd">${t('addExam')}</button></div>
    ${ex.length ? `<table class="res">${ex.map(x => { const d = daysTo(x.date); return `<tr class="${d < 0 ? 'pastr' : ''}"><td>${C.MOD[x.mod].em} ${esc(L(C.MOD[x.mod].name))}<br><small>${esc(x.type)}</small></td><td>${x.date}</td><td><b>${d < 0 ? t('past') : d === 0 ? t('today2') : t('dleft').replace('{n}', d)}</b></td><td><button class="mini" data-xdel="${x.id}">✕</button></td></tr>`; }).join('')}</table>` : `<p class="muted">${t('noExam')}</p>`}</div></div>
  <h2>🗺️ ${t('prep')}</h2><div class="prep">${PREP.map(p => `<div class="card"><span>${p[1]}</span>${esc(L(p[0]))}</div>`).join('')}</div>
  <div class="row2"><a class="btn pri" href="#train/sim">⏱️ ${t('sim')}</a><a class="btn" href="#formulas">📐 ${t('formulas')}</a><a class="btn" href="#errors">⚠️ ${t('errors')}</a></div>
  <h2>📊 ${t('studyLog')}</h2><div class="card">${C.MODS.map(m => `<div class="kv"><span>${m.em} ${esc(L(m.name))}</span><b>${per[m.id] || 0}</b></div><div class="bar"><i style="width:${(per[m.id] || 0) / mx * 100}%;background:${m.color}"></i></div>`).join('')}</div>`;
}
export function bindExams() {
  const draw = () => { const e = $('#tmv'); if (e) e.textContent = fmtT(tm.left); const g = $('#tmGo'); if (g) g.textContent = tm.run ? t('pause') : t('go'); };
  document.querySelectorAll('[data-tm]').forEach(b => b.onclick = () => { tm.mode = b.dataset.tm; tm.left = (tm.mode === 'focus' ? tm.f : tm.b) * 60; C.render(); });
  $('#tmGo').onclick = () => { tm.run = !tm.run; clearInterval(tm.iv); if (tm.run) tm.iv = setInterval(() => { tm.left--; if (tm.left <= 0) { beep(); if (tm.mode === 'focus') C.logMin(tm.f, tm.mod); tm.mode = tm.mode === 'focus' ? 'break' : 'focus'; tm.left = (tm.mode === 'focus' ? tm.f : tm.b) * 60; C.toast(tm.mode === 'focus' ? '💪 ' + t('focus') : '☕ ' + t('brk')); } draw(); }, 1000); draw(); };
  $('#tmRe').onclick = () => { tm.run = false; clearInterval(tm.iv); tm.left = (tm.mode === 'focus' ? tm.f : tm.b) * 60; draw(); };
  $('#tmMod').onchange = e => { tm.mod = e.target.value; };
  $('#tmF').onchange = e => { tm.f = Math.max(5, +e.target.value || 25); if (!tm.run && tm.mode === 'focus') tm.left = tm.f * 60; draw(); };
  $('#tmB').onchange = e => { tm.b = Math.max(1, +e.target.value || 5); if (!tm.run && tm.mode === 'break') tm.left = tm.b * 60; draw(); };
  $('#xAdd').onclick = () => { const d = $('#xDate').value; if (!d) return $('#xDate').focus(); C.S.exams = [...(C.S.exams || []), { id: Date.now(), mod: $('#xMod').value, type: $('#xType').value, date: d }]; C.save(); C.render(); };
  document.querySelectorAll('[data-xdel]').forEach(b => b.onclick = () => { C.S.exams = C.S.exams.filter(x => x.id !== +b.dataset.xdel); C.save(); C.render(); });
}
// ================================================= ملفاتي
let FL = { mod: 'all', list: null, prev: null };
export function vFiles() {
  if (!FL.list) { allFiles().then(l => { FL.list = l; usage().then(u => { FL.u = u; C.render(); }); }).catch(() => { FL.list = []; C.render(); }); return `<h1>📁 ${t('files')}</h1><p class="muted">…</p>`; }
  const l = FL.list.filter(f => FL.mod === 'all' || f.mod === FL.mod);
  return `<h1>📁 ${t('files')}</h1><p class="muted">${t('filesHelp')}${FL.u ? ` · ${t('storage')} : ${fsz(FL.u.usage || 0)}` : ''}</p>
  <div class="filters"><select id="fMod">${modOpt(FL.mod)}</select><label class="btn pri">${t('upload')}<input type="file" id="fIn" multiple hidden></label><label class="btn">${t('photo')}<input type="file" id="fCam" accept="image/*" capture="environment" hidden></label></div>
  ${FL.prev ? `<div class="card prev"><div class="hrow"><b>${esc(FL.prev.name)}</b><button class="mini" id="pClose">✕</button></div>${/image/.test(FL.prev.type) ? `<img src="${FL.prev.url}">` : /pdf/.test(FL.prev.type) ? `<iframe src="${FL.prev.url}"></iframe>` : /audio/.test(FL.prev.type) ? `<audio controls src="${FL.prev.url}"></audio>` : /video/.test(FL.prev.type) ? `<video controls src="${FL.prev.url}"></video>` : `<p><a class="btn" href="${FL.prev.url}" download="${esc(FL.prev.name)}">${t('download')}</a></p>`}</div>` : ''}
  ${l.length ? `<div class="files">${l.map(f => `<div class="card file"><span class="fi">${ficon(f.type)}</span><div class="fn"><b>${esc(f.name)}</b><small>${fsz(f.size)} · ${f.date.slice(0, 10)}</small><select data-fmod="${f.id}">${C.MODS.map(m => `<option value="${m.id}" ${f.mod === m.id ? 'selected' : ''}>${m.em} ${esc(L(m.name))}</option>`).join('')}<option value="other" ${f.mod === 'other' ? 'selected' : ''}>—</option></select></div><div class="fa"><button class="btn sm" data-fopen="${f.id}">${t('open')}</button><button class="btn sm" data-fdl="${f.id}">⬇️</button><button class="btn sm bad" data-fdel="${f.id}">✕</button></div></div>`).join('')}</div>` : `<div class="card center"><div class="big">📂</div><p>${t('noFiles')}</p></div>`}`;
}
export function bindFiles() {
  const fm = $('#fMod'); if (!fm) return;
  fm.onchange = e => { FL.mod = e.target.value; C.render(); };
  const up = async e => { const mod = FL.mod === 'all' ? (C.S.last ? C.CH[C.S.last].mod : 'other') : FL.mod; for (const f of e.target.files) await addFile(f, mod); FL.list = null; C.toast('✔'); C.render(); };
  $('#fIn').onchange = up; $('#fCam').onchange = up;
  document.querySelectorAll('[data-fopen]').forEach(b => b.onclick = async () => { const f = await getFile(b.dataset.fopen); if (FL.prev) URL.revokeObjectURL(FL.prev.url); FL.prev = { name: f.name, type: f.type, url: URL.createObjectURL(f.blob) }; C.render(); });
  document.querySelectorAll('[data-fdl]').forEach(b => b.onclick = async () => { const f = await getFile(b.dataset.fdl); const u = URL.createObjectURL(f.blob); const a = document.createElement('a'); a.href = u; a.download = f.name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 4000); });
  document.querySelectorAll('[data-fdel]').forEach(b => b.onclick = async () => { await delFile(b.dataset.fdel); FL.list = null; C.render(); });
  document.querySelectorAll('[data-fmod]').forEach(s => s.onchange = async () => { await setMod(s.dataset.fmod, s.value); FL.list = null; C.render(); });
  const pc = $('#pClose'); if (pc) pc.onclick = () => { URL.revokeObjectURL(FL.prev.url); FL.prev = null; C.render(); };
}
export const filesCount = mod => (FL.list || []).filter(f => f.mod === mod).length;
// ================================================= المزيد (للتليفون)
export function vMore(NAV) {
  return `<h1>☰ ${t('more')}</h1><div class="moregrid">${NAV.map(([v, e]) => `<a class="card" href="#${v}"><span>${e}</span><b>${t(v)}</b></a>`).join('')}</div>`;
}
