// DUT MEEC – التطبيق: الصفحات، الحفظ، المراجعة، الجدول
import { t, tv, L, tr, lang, setLang, LANGS, LNAME } from './i18n.js?v=3';
import * as X from './extra.js?v=3';
import MORE from './content/more.js?v=3';
import { CLASSES, SLOTS, DAYS, SEM_END, weekNo, nextClass, myClasses } from './timetable.js?v=3';
import { figHTML } from './figs.js?v=3';
import { GENS, makeEx, checkAns } from './gens.js?v=3';
import mgt from './content/mgt.js?v=3';
import eco from './content/eco.js?v=3';
import compta from './content/compta.js?v=3';
import math from './content/math.js?v=3';
import num from './content/num.js?v=3';
import fr from './content/fr.js?v=3';
import en from './content/en.js?v=3';
import metho from './content/metho.js?v=3';

export const MODS = [mgt, eco, compta, math, num, fr, en, metho];
const MOD = Object.fromEntries(MODS.map(m => [m.id, m]));
const CH = {}; MODS.forEach(m => m.chapters.forEach((c, i) => { CH[c.id] = { ...c, mod: m.id, idx: i, more: MORE[c.id] }; }));
const DS = { id: 'ds', em: '📝', color: '#6b7280', name: { fr: 'Devoirs surveillés', ar: 'الفروض المحروسة', en: 'Supervised tests' } };

// ------------------------------------------------ الحفظ
const KEY = 'meec_v1';
const DEF = { v: 1, name: '', lang: 'fr', group: 0, goal: 60, done: {}, notes: {}, srs: {}, log: {}, logMod: {}, stats: {}, errors: [], last: null, lessonLang: {}, cycle: {}, exams: [], sims: [], known: {} };
let S = load();
function load() { try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return { ...structuredClone(DEF), ...s }; } catch (e) {} return structuredClone(DEF); }
let saveT; function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }, 150); }

// ------------------------------------------------ أدوات
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const today = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const addDays = n => { const d = new Date(); d.setDate(d.getDate() + n); return today(d); };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function toast(m) { const e = $('#toast'); e.textContent = m; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 2000); }
const modName = id => id === 'ds' ? L(DS.name) : L(MOD[id].name);
const modOf = id => id === 'ds' ? DS : MOD[id];
const minOn = d => S.log[d] || 0;
function streak() { let n = 0; for (let k = 0; k < 400; k++) { if (minOn(addDays(-k)) > 0) n++; else if (k > 0) break; } return n; }
const modPct = m => Math.round(m.chapters.filter(c => S.done[c.id]).length / m.chapters.length * 100);
const ring = (p, col = '#1d3a6e', sz = 54) => { const r = 22, c = 2 * Math.PI * r; return `<svg class="ring" width="${sz}" height="${sz}" viewBox="0 0 54 54"><circle cx="27" cy="27" r="${r}" fill="none" stroke="#e3e8f0" stroke-width="6"/><circle cx="27" cy="27" r="${r}" fill="none" stroke="${col}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c * p / 100} ${c}" transform="rotate(-90 27 27)"/><text x="27" y="31" text-anchor="middle" font-size="13" font-weight="800" fill="#1b2433">${p}%</text></svg>`; };

// ------------------------------------------------ وقت القراية (كيتحسب غير ف الدروس و التمارين)
function logMin(n, mod) { const d = today(); S.log[d] = (S.log[d] || 0) + n; if (mod && mod !== 'all') { S.logMod[d] = S.logMod[d] || {}; S.logMod[d][mod] = (S.logMod[d][mod] || 0) + n; } save(); }
setInterval(() => { if (document.visibilityState !== 'visible') return; const { v, a } = route(); if (!['chap', 'ex', 'review', 'errors', 'train', 'tools', 'dict', 'formulas', 'mod'].includes(v)) return; logMin(1, v === 'chap' ? (CH[a] || {}).mod : v === 'ex' ? EX.mod : v === 'mod' ? a : null); }, 60000);

// ------------------------------------------------ البطاقات (لايتنر)
const IVL = [0, 1, 3, 7, 14, 30, 60];
function allCards() { const out = []; MODS.forEach(m => m.gloss.forEach((g, i) => out.push({ id: m.id + ':' + i, mod: m.id, g }))); return out; }
function dueCards(mod) { const td = today(); const all = allCards().filter(c => !mod || mod === 'all' || c.mod === mod); const due = all.filter(c => S.srs[c.id] && S.srs[c.id].due <= td); const fresh = all.filter(c => !S.srs[c.id]); return { due, fresh, all }; }

// ------------------------------------------------ التوجيه (hash)
function route() { const h = location.hash.slice(1) || 'home'; const [v, a] = h.split('/'); return { v, a }; }
const NAV = [['home', '🏠'], ['edt', '🗓️'], ['modules', '📚'], ['ex', '✏️'], ['train', '🎯'], ['review', '🃏'], ['tools', '🧮'], ['formulas', '📐'], ['dict', '📖'], ['exams', '📅'], ['files', '📁'], ['errors', '⚠️'], ['settings', '⚙️']];
function nav() {
  const r = route().v, cur = r === 'mod' || r === 'chap' ? 'modules' : r;
  const bn = [['home', '🏠'], ['edt', '🗓️'], ['modules', '📚'], ['ex', '✏️'], ['more', '☰']]; const inB = bn.some(b => b[0] === cur);
  const items = NAV.map(([v, e]) => `<a href="#${v}" class="${cur === v ? 'on' : ''}"><span>${e}</span><b>${t(v)}</b>${v === 'review' && dueCards().due.length ? `<i class="badge">${dueCards().due.length}</i>` : ''}${v === 'errors' && S.errors.length ? `<i class="badge">${S.errors.length}</i>` : ''}</a>`).join('');
  $('#side').innerHTML = `<div class="brand"><div class="logo">🎓</div><div><b>${t('app')}</b><small>${t('sub')}</small></div></div><nav>${items}</nav><div class="langs">${LANGS.map(l => `<button data-lang="${l}" class="${lang === l ? 'on' : ''}">${LNAME[l]}</button>`).join('')}</div>`;
  $('#bnav').innerHTML = bn.map(([v, e]) => `<a href="#${v}" class="${cur === v || (v === 'more' && !inB) ? 'on' : ''}"><span>${e}</span><b>${t(v)}</b></a>`).join('');
  document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { S.lang = b.dataset.lang; setLang(S.lang); save(); render(); });
}
function topbar() {
  return `<div class="top"><div class="search"><input id="q" type="search" placeholder="${t('search')}" autocomplete="off"><div id="qres"></div></div><a class="tbtn" href="#settings">⚙️</a><button class="tbtn" id="tLang">${lang === 'fr' ? 'ع' : lang === 'ar' ? 'EN' : 'FR'}</button></div>`;
}

// ------------------------------------------------ الرئيسية
function vHome() {
  const nc = nextClass(S.group || 0), wk = weekNo(), dEnd = Math.max(0, Math.ceil((SEM_END - new Date()) / 864e5));
  const { due } = dueCards(); const mt = minOn(today()), st = streak();
  const lastC = S.last && CH[S.last];
  const cls = nc ? (() => { const m = modOf(nc.c.mod); const d = DAYS[lang][nc.c.d]; const hh = `${SLOTS[nc.c.s][0]}h–${SLOTS[nc.c.s][1]}h`;
    const when = nc.live ? t('now') : (today(nc.start) === today() ? t('todayCls') : d + ' ' + nc.start.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }));
    return `<div class="card nc" style="--c:${m.color}"><small>${nc.live ? '🔴 ' : ''}${t('nextClass')}</small><b>${m.em} ${esc(modName(nc.c.mod))}</b><span>${when} · ${hh}${nc.c.room ? ' · ' + esc(nc.c.room) : ''}</span>${nc.c.prof && nc.c.prof !== '…' ? `<span class="muted">${esc(nc.c.prof)}</span>` : ''}</div>`; })() : `<div class="card nc"><small>${t('nextClass')}</small><b>${t('noClass')}</b></div>`;
  const totalCh = MODS.reduce((a, m) => a + m.chapters.length, 0), doneCh = Object.keys(S.done).filter(k => CH[k]).length;
  return `<h1>${t('hello')}${S.name ? ' ' + esc(S.name) : ''} 👋</h1><p class="muted">${t('sub')}</p>
  <div class="grid4">${cls}
    <div class="card stat"><small>${t('week')}</small><b>${wk >= 1 && wk <= 16 ? 'S' + wk : '—'} <em>/ S16</em></b><span>${t('semEnd')} : ${dEnd} ${t('days')}</span></div>
    ${(() => { const x = (S.exams || []).filter(e => X.daysTo(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date))[0]; return x ? `<a class="card stat" href="#exams"><small>📅 ${t('nextExam')}</small><b>${X.daysTo(x.date)} <em>${t('days')}</em></b><span>${MOD[x.mod].em} ${esc(modName(x.mod))} · ${esc(x.type)}</span></a>` : ''; })()}
    <a class="card stat" href="#review"><small>🃏 ${t('review')}</small><b>${due.length}</b><span>${t('toReview')}</span></a>
    <div class="card stat"><small>⏱️ ${t('studyToday')}</small><b>${mt} <em>/ ${S.goal} ${t('min')}</em></b><div class="bar"><i style="width:${Math.min(100, mt / S.goal * 100)}%"></i></div><span>🔥 ${st} ${t('streak')}</span></div>
  </div>
  ${S.errors.length ? `<a class="card cont err2" href="#errors"><span>⚠️</span><div><small>${t('errors')}</small><b>${S.errors.length} ${tr('exercices à refaire', 'تمارين خاصك تعاوديهم', 'exercises to redo')}</b></div><i>➜</i></a>` : ''}
  ${lastC ? `<a class="card cont" href="#chap/${lastC.id}"><span>${MOD[lastC.mod].em}</span><div><small>${t('continueL')}</small><b>${esc(L(lastC.t))}</b><em>${esc(modName(lastC.mod))}</em></div><i>➜</i></a>` : ''}
  <h2>${t('progress')} <small class="muted">· ${doneCh}/${totalCh} ${t('lessonsDone')}</small></h2>
  <div class="mods">${MODS.map(modCard).join('')}</div>`;
}
function modCard(m) { return `<a class="card mod" href="#mod/${m.id}" style="--c:${m.color}"><div class="em">${m.em}</div><div class="info"><small>M ${m.code}</small><b>${esc(L(m.name))}</b><span>${m.chapters.length} ${t('chapters')} · ${esc(m.prof)}</span></div>${ring(modPct(m), m.color, 50)}</a>`; }

// ------------------------------------------------ استعمال الزمن
let edtDay = null;
function vEdt() {
  const g = S.group || 0, wk = weekNo(), dow = (new Date().getDay() + 6) % 7, list = myClasses(g);
  const cell = c => { const m = modOf(c.mod); const out = wk >= 1 && (wk < c.w[0] || wk > c.w[1]);
    return `<a href="#${c.mod === 'ds' ? 'exams' : 'mod/' + c.mod}" title="${esc(modName(c.mod))}" class="cls ${out ? 'out' : ''}" style="--c:${m.color}"><b>${m.em} ${esc(modName(c.mod))}${c.g ? ` <em>G${c.g}</em>` : ''}</b>${c.type ? `<span>${c.type} · ${esc(c.room)}</span>` : ''}${c.prof && c.prof !== '…' ? `<span>${esc(c.prof)}</span>` : ''}${c.hours ? `<span class="muted">${c.hours} · S${c.w[0]}–S${c.w[1]}</span>` : ''}</a>`; };
  let grid = `<div class="edt"><div class="h"></div>${SLOTS.map(s => `<div class="h">${s[0]}h–${s[1]}h</div>`).join('')}`;
  DAYS[lang].forEach((d, di) => { grid += `<div class="d ${di === dow ? 'today' : ''}">${d}</div>`; SLOTS.forEach((s, si) => { const cs = list.filter(c => c.d === di && c.s === si); grid += `<div class="c ${di === dow ? 'today' : ''}">${cs.map(cell).join('')}</div>`; }); });
  grid += '</div>';
  if (edtDay === null) edtDay = dow < 6 ? dow : 0;
  const tabs = `<div class="dtabs">${DAYS[lang].map((d, di) => { const n = list.filter(c => c.d === di).length; return `<button data-dd="${di}" class="${edtDay === di ? 'on' : ''} ${di === dow ? 'td' : ''}"><b>${d.slice(0, lang === 'ar' ? 8 : 3)}</b><small>${n ? n + ' ' + tr('cours', 'حصص', 'classes') : '—'}</small></button>`; }).join('')}<button data-dd="-1" class="${edtDay === -1 ? 'on' : ''}"><b>${tr('Semaine', 'الأسبوع', 'Week')}</b><small>📋</small></button></div>`;
  const mob = tabs + DAYS[lang].map((d, di) => { if (edtDay !== -1 && di !== edtDay) return ''; const cs = list.filter(c => c.d === di).sort((a, b) => a.s - b.s); return `<div class="day ${di === dow ? 'today' : ''}"><h3>${d}${di === dow ? ' · ' + t('todayCls') : ''}</h3>${cs.length ? cs.map(c => `<div class="row"><time>${SLOTS[c.s][0]}h–${SLOTS[c.s][1]}h</time>${cell(c)}</div>`).join('') : `<p class="muted">${t('free')}</p>`}</div>`; }).join('');
  return `<h1>🗓️ ${t('edt')}</h1><p class="muted">${t('semWeeks')} · ${t('week')} ${wk >= 1 && wk <= 16 ? 'S' + wk : '—'}</p>
  <div class="seg">${[0, 1, 2].map(x => `<button data-g="${x}" class="${g === x ? 'on' : ''}">${x ? t('group') + ' ' + x : tr('Groupes 1 et 2', 'المجموعتين 1 و 2', 'Groups 1 & 2')}</button>`).join('')}</div>
  <div class="wide">${grid}</div><div class="narrow">${mob}</div>`;
}

// ------------------------------------------------ المواد و الدروس
function vModules() { return `<h1>📚 ${t('modules')}</h1><div class="mods">${MODS.map(modCard).join('')}</div>`; }
function vMod(id) {
  const m = MOD[id]; if (!m) return vModules();
  const cl = CLASSES.find(c => c.mod === id);
  return `<a class="back" href="#modules">${lang === 'ar' ? '→' : '←'} ${t('modules')}</a>
  <div class="mhead" style="--c:${m.color}"><div class="em">${m.em}</div><div><small>Module ${m.code}</small><h1>${esc(L(m.name))}</h1><p>${t('prof')} : <b>${esc(m.prof)}</b>${cl ? ` · ${t('hours')} : ${cl.hours} · ${t('weeks')} : S${cl.w[0]}–S${cl.w[1]}` : ''}</p></div>${ring(modPct(m), m.color, 64)}</div>
  <p class="intro">${L(m.intro)}</p>
  <div class="cyc"><b>🔁 ${t('cycle')}</b>${tv('cyc').map((c, i) => `<label class="${(S.cycle[id] || [])[i] ? 'on' : ''}"><input type="checkbox" data-cy="${i}" ${(S.cycle[id] || [])[i] ? 'checked' : ''}>${i + 1}. ${c}</label>`).join('')}</div>
  <div class="row2"><a class="btn" href="#tools/${id}">🧮 ${t('tools')}</a><a class="btn" href="#train">🎯 ${t('train')}</a><a class="btn" href="#files">📁 ${t('files')}</a>${(() => { const x = (S.exams || []).filter(e => e.mod === id && X.daysTo(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date))[0]; return x ? `<a class="btn bad" href="#exams">📅 ${esc(x.type)} : ${x.date}</a>` : ''; })()}</div>
  <div class="chs">${m.chapters.map((c, i) => `<a class="card ch ${S.done[c.id] ? 'ok' : ''}" href="#chap/${c.id}"><i>${S.done[c.id] ? '✅' : i + 1}</i><div><b>${esc(L(c.t))}</b><span>${esc(L(c.sum))}</span></div></a>`).join('')}</div>
  <div class="row2"><a class="btn pri" href="#ex/${id}">✏️ ${t('practice')}</a><a class="btn" href="#review/${id}">🃏 ${t('review')}</a></div>
  <h2>📖 ${t('glossary')} <small class="muted">(${m.gloss.length} ${t('vocabOf')})</small></h2>
  <div class="gloss">${m.gloss.map(g => `<div><b>${esc(g[0])}</b><span dir="rtl">${esc(g[1])}</span><em>${esc(g[2])}</em><p>${esc(L(g[3]))}</p></div>`).join('')}</div>`;
}
function lessonLang(id) { return S.lessonLang[id] || lang; }
function vChap(id) {
  const c = CH[id]; if (!c) return vModules();
  const m = MOD[c.mod], ll = lessonLang(id), body = (c.body[ll] || c.body.fr).replace(/\{\{fig:(\w+)\}\}/g, (_, f) => figHTML(f));
  S.last = id; save();
  const prev = m.chapters[c.idx - 1], next = m.chapters[c.idx + 1];
  const key = (c.key && (c.key[ll] || c.key.fr)) || [];
  return `<a class="back" href="#mod/${m.id}">${lang === 'ar' ? '→' : '←'} ${esc(L(m.name))}</a>
  <article class="lesson" id="lesson" lang="${ll}" dir="${ll === 'ar' ? 'rtl' : 'ltr'}" style="--c:${m.color}">
    <div class="lhead"><small>${m.em} M ${m.code} · ${tr('Chapitre', 'الفصل', 'Chapter')} ${c.idx + 1}</small><h1>${esc(c.t[ll] || c.t.fr)}</h1>
      <div class="tools noprint"><div class="seg sm">${LANGS.map(l => `<button data-ll="${l}" class="${ll === l ? 'on' : ''}">${l.toUpperCase()}</button>`).join('')}</div><button class="btn sm" id="spk">🔊 ${t('listen')}</button><button class="btn sm" id="prn">${t('print')}</button></div></div>
    <div class="body">${body}</div>
    ${c.more ? `<div class="body more"><h2>📘 ${t('moreLesson')}</h2>${(c.more[ll] || c.more.fr).replace(/\{\{fig:(\w+)\}\}/g, (_, f) => figHTML(f))}</div>` : ''}
    ${key.length ? `<div class="key"><h3>📌 ${t('keyPoints')}</h3><ul>${key.map(k => `<li>${k}</li>`).join('')}</ul></div>` : ''}
  </article>
  <div class="noprint"><h3>📝 ${t('myNotes')}</h3><textarea id="notes" placeholder="${t('notesPh')}">${esc(S.notes[id] || '')}</textarea>
  <div class="row2"><button class="btn ${S.done[id] ? 'ok' : 'pri'}" id="doneBtn">${S.done[id] ? t('done') : t('markDone')}</button><a class="btn" href="#ex/${m.id}">✏️ ${t('practice')}</a></div>
  <div class="pn">${prev ? `<a class="btn" href="#chap/${prev.id}">${t('prev')}</a>` : '<span></span>'}${next ? `<a class="btn" href="#chap/${next.id}">${t('next')}</a>` : ''}</div></div>`;
}
// القراية بالصوت
let speaking = false;
function pickVoice(l) { const vs = speechSynthesis.getVoices(); const p = { fr: 'fr', ar: 'ar', en: 'en' }[l]; return vs.find(v => v.lang.toLowerCase().startsWith(p) && /google|natural|premium|enhanced/i.test(v.name)) || vs.find(v => v.lang.toLowerCase().startsWith(p)); }
function speakLesson(btn, ll) {
  if (!('speechSynthesis' in window)) return toast('🔇');
  if (speaking) { speechSynthesis.cancel(); speaking = false; btn.textContent = '🔊 ' + t('listen'); return; }
  const txt = $('#lesson .body').innerText.replace(/\s+/g, ' ');
  const parts = txt.match(/[^.!?؟:;]+[.!?؟:;]*/g) || [txt]; const v = pickVoice(ll);
  speaking = true; btn.textContent = '⏹ ' + t('stop');
  parts.forEach((p, i) => { const u = new SpeechSynthesisUtterance(p.trim()); u.lang = { fr: 'fr-FR', ar: 'ar-MA', en: 'en-GB' }[ll]; if (v) u.voice = v; u.rate = 0.95; if (i === parts.length - 1) u.onend = () => { speaking = false; btn.textContent = '🔊 ' + t('listen'); }; speechSynthesis.speak(u); });
}

// ------------------------------------------------ التمارين بلا حدود
let EX = { mod: 'all', type: 'mix', cur: null, ok: 0, n: 0, run: 0, shown: false };
function vEx(mod) {
  if (mod && mod !== EX.mod) { EX.mod = mod; EX.cur = null; }
  if (!EX.cur) EX.cur = makeEx(EX.mod, EX.type);
  const e = EX.cur;
  return `<h1>✏️ ${t('ex')}</h1><p class="muted">♾️ ${t('exHelp')}</p>
  <div class="filters"><select id="exMod"><option value="all">${t('allMods')}</option>${MODS.map(m => `<option value="${m.id}" ${EX.mod === m.id ? 'selected' : ''}>${m.em} ${esc(L(m.name))}</option>`).join('')}</select>
  <div class="seg sm">${['mix', 'calc', 'qcm'].map(x => `<button data-ty="${x}" class="${EX.type === x ? 'on' : ''}">${t(x)}</button>`).join('')}</div>
  <span class="score">${t('score')} : <b>${EX.ok}/${EX.n}</b> · 🔥 ${EX.run}</span></div>
  ${exCard(e, 'exA')}`;
}
function exCard(e, id) {
  const m = MOD[e.mod];
  return `<div class="card excard" style="--c:${m.color}" id="${id}"><small>${m.em} ${esc(L(m.name))} · ${esc(e.title)}</small><div class="q">${e.q}</div>
  ${e.type === 'mcq' ? `<div class="opts">${e.opts.map((o, i) => `<button class="opt" data-o="${i}">${o}</button>`).join('')}</div>` : `<div class="numin"><input id="${id}In" inputmode="decimal" placeholder="${t('answer')}" autocomplete="off">${e.unit ? `<span>${esc(e.unit)}</span>` : ''}<button class="btn pri" data-chk="1">${t('check')}</button></div><small class="muted">${t('decimalHint')}</small>`}
  <div class="fb" id="${id}Fb"></div><div class="row2"><button class="btn" data-sol="1">💡 ${t('showSol')}</button>${id === 'exA' ? `<button class="btn pri" id="newEx">${t('newEx')}</button>` : ''}</div>
  <div class="sol" id="${id}Sol" hidden><h4>${t('solution')}</h4>${e.sol}</div></div>`;
}
function bindEx(e, id, onResult) {
  const root = $('#' + id); if (!root) return; let answered = false;
  const fin = (ok, given) => { if (answered) return; answered = true; const fb = $('#' + id + 'Fb'); fb.innerHTML = ok ? t('correct') : t('wrong'); fb.className = 'fb ' + (ok ? 'good' : 'bad'); $('#' + id + 'Sol').hidden = false; onResult(ok, given); };
  root.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { const i = +b.dataset.o, ok = i === e.ans; root.querySelectorAll('[data-o]').forEach(x => { x.disabled = true; if (+x.dataset.o === e.ans) x.classList.add('good'); }); if (!ok) b.classList.add('bad'); fin(ok, e.opts[i]); });
  const chk = root.querySelector('[data-chk]'); const inp = $('#' + id + 'In');
  if (chk) { chk.onclick = () => { const v = inp.value; if (!v.trim()) return inp.focus(); fin(checkAns(e, v), v); }; inp.onkeydown = ev => { if (ev.key === 'Enter') chk.click(); }; }
  root.querySelector('[data-sol]').onclick = () => { if (!answered) fin(false, '—'); };
}
function exResult(ok, given) {
  const e = EX.cur; EX.n++; if (ok) { EX.ok++; EX.run++; } else { EX.run = 0; S.errors.unshift({ id: Date.now(), mod: e.mod, title: e.title, e, given: String(given), date: today() }); S.errors = S.errors.slice(0, 200); }
  const st = S.stats[e.mod] || (S.stats[e.mod] = { ok: 0, n: 0 }); st.n++; if (ok) st.ok++; save();
  const sc = document.querySelector('.score b'); if (sc) sc.textContent = `${EX.ok}/${EX.n}`;
}

// ------------------------------------------------ المراجعة
let RV = { mod: 'all', q: null, i: 0, flip: false, done: 0 };
function vReview(mod) {
  mod = mod || RV.mod; if (mod !== RV.mod || !RV.q) { RV = { mod, q: null, i: 0, flip: false, done: 0 }; const { due, fresh } = dueCards(mod); RV.q = shuffle(due).concat(shuffle(fresh).slice(0, Math.max(0, 15 - due.length))); }
  const c = RV.q[RV.i];
  const head = `<h1>🃏 ${t('review')}</h1><p class="muted">${t('reviewHelp')}</p><div class="filters"><select id="rvMod"><option value="all">${t('allMods')}</option>${MODS.map(m => `<option value="${m.id}" ${mod === m.id ? 'selected' : ''}>${m.em} ${esc(L(m.name))}</option>`).join('')}</select><span class="score">${RV.done}/${RV.q.length}</span></div>`;
  if (!c) return head + `<div class="card center"><div class="big">🎉</div><p>${t('reviewDone')}</p><button class="btn pri" id="rvMore">${t('more')}</button></div>`;
  const m = MOD[c.mod], g = c.g; const front = lang === 'ar' ? g[1] : lang === 'en' ? g[2] : g[0];
  return head + `<div class="card flash ${RV.flip ? 'flip' : ''}" style="--c:${m.color}"><small>${m.em} ${esc(L(m.name))} · ${tr('Boîte', 'العلبة', 'Box')} ${(S.srs[c.id] || { b: 0 }).b}</small>
  <div class="front">${esc(front)}</div>${RV.flip ? `<div class="back"><p class="def">${esc(L(g[3]))}</p><div class="tri"><span>🇫🇷 ${esc(g[0])}</span><span dir="rtl">🇲🇦 ${esc(g[1])}</span><span>🇬🇧 ${esc(g[2])}</span></div></div>` : ''}
  <div class="row2">${RV.flip ? `<button class="btn bad" data-rate="0">${t('didnt')}</button><button class="btn ok" data-rate="1">${t('knew')}</button>` : `<button class="btn pri" id="flip">${t('showAns')}</button>`}</div></div>`;
}
function rate(k) { const c = RV.q[RV.i]; const st = S.srs[c.id] || { b: 0 }; st.b = k ? Math.min(6, st.b + 1) : 1; st.due = addDays(k ? IVL[st.b] : 1); S.srs[c.id] = st; RV.i++; RV.done++; RV.flip = false; save(); render(); }

// ------------------------------------------------ الأخطاء
function vErrors() {
  if (!S.errors.length) return `<h1>⚠️ ${t('errors')}</h1><div class="card center"><div class="big">🎉</div><p>${t('noErrors')}</p></div>`;
  return `<h1>⚠️ ${t('errors')} <small class="muted">(${S.errors.length})</small></h1><div class="row2"><button class="btn" id="clrErr">🗑️ ${t('clearAll')}</button></div>
  ${S.errors.slice(0, 40).map((er, k) => `<div class="card err" style="--c:${MOD[er.mod].color}"><small>${MOD[er.mod].em} ${esc(L(MOD[er.mod].name))} · ${esc(er.title)} · ${er.date}</small><div class="q">${er.e.q}</div><p class="muted">${t('answer')} : <b>${esc(er.given)}</b></p>
  <details><summary>💡 ${t('solution')}</summary>${er.e.sol}</details><div class="row2"><button class="btn sm" data-retry="${er.id}">🔁 ${t('retry')}</button><button class="btn sm" data-rm="${er.id}">✕ ${t('remove')}</button></div><div id="rt${er.id}"></div></div>`).join('')}`;
}

// ------------------------------------------------ الإعدادات
let deferredPrompt = null; addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; });
function vSettings() {
  return `<h1>⚙️ ${t('settings')}</h1>
  <div class="card form"><label>${t('yourName')}<input id="sName" value="${esc(S.name)}"></label>
  <label>${t('yourGroup')}<div class="seg">${[1, 2].map(x => `<button data-sg="${x}" class="${S.group === x ? 'on' : ''}">${t('group')} ${x}</button>`).join('')}</div></label>
  <label>${t('appLang')}<div class="seg">${LANGS.map(l => `<button data-lang="${l}" class="${lang === l ? 'on' : ''}">${LNAME[l]}</button>`).join('')}</div></label>
  <label>${t('dailyGoal')}<input id="sGoal" type="number" min="10" max="600" step="10" value="${S.goal}"></label></div>
  <h2>📲 ${t('install')}</h2><div class="card"><p>${t('iosInstall')}</p><p>${t('pcInstall')}</p><button class="btn pri" id="instBtn">${t('installBtn')}</button></div>
  <h2>💾 ${t('backup')}</h2><div class="card"><p>${t('backupHelp')}</p><div class="row2"><button class="btn pri" id="expB">${t('exportB')}</button><label class="btn">${t('importB')}<input type="file" id="impB" accept=".json,application/json" hidden></label></div></div>
  <div class="row2"><button class="btn bad" id="rst">${t('resetAll')}</button></div>`;
}

// ------------------------------------------------ البحث
let SIDX = null;
function searchIdx() { const out = []; MODS.forEach(m => { m.chapters.forEach(c => LANGS.forEach(l => out.push({ h: '#chap/' + c.id, t: (c.t[l] || '') , s: m.em + ' ' + L(m.name), x: ((c.t[l] || '') + ' ' + (c.body[l] || '').replace(/<[^>]+>|\{\{[^}]+\}\}/g, ' ')).toLowerCase(), l }))); m.gloss.forEach(g => out.push({ h: '#mod/' + m.id, t: g[0] + ' · ' + g[1] + ' · ' + g[2], s: m.em + ' ' + t('glossary'), x: (g.slice(0, 3).join(' ') + ' ' + L(g[3])).toLowerCase() })); }); return out; }
function doSearch(q) { q = q.trim().toLowerCase(); if (q.length < 2) return []; SIDX = SIDX || searchIdx(); const terms = q.split(/\s+/); const seen = new Set(); const out = []; for (const r of SIDX) { if (!terms.every(w => r.x.includes(w))) continue; const k = r.h.startsWith('#chap') ? r.h : r.h + r.t; if (seen.has(k)) continue; seen.add(k); out.push(r); if (out.length >= 12) break; } return out; }

// ------------------------------------------------ أول مرة
function onboarding() {
  $('#modal').innerHTML = `<div class="card ob"><div class="big">🎓</div><h2>${t('welcomeT')}</h2><p>${t('welcomeP')}</p>
  <label>${t('appLang')}<div class="seg">${LANGS.map(l => `<button data-obl="${l}" class="${lang === l ? 'on' : ''}">${LNAME[l]}</button>`).join('')}</div></label>
  <label>${t('yourName')}<input id="obName" autocomplete="given-name"></label>
  <label>${t('yourGroup')}<div class="seg">${[1, 2].map(x => `<button data-obg="${x}" class="${S.group === x ? 'on' : ''}">${t('group')} ${x}</button>`).join('')}</div></label>
  <button class="btn pri big" id="obGo">${t('start')}</button></div>`;
  $('#modal').classList.add('on');
  document.querySelectorAll('[data-obl]').forEach(b => b.onclick = () => { const n = $('#obName').value; S.lang = b.dataset.obl; setLang(S.lang); onboarding(); $('#obName').value = n; });
  document.querySelectorAll('[data-obg]').forEach(b => b.onclick = () => { S.group = +b.dataset.obg; document.querySelectorAll('[data-obg]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#obGo').onclick = () => { S.name = $('#obName').value.trim(); S.onboarded = 1; save(); $('#modal').classList.remove('on'); render(); };
}

// ------------------------------------------------ الرسم
function render() {
  const { v, a } = route();
  if ('speechSynthesis' in window && speaking) { speechSynthesis.cancel(); speaking = false; }
  nav();
  const html = v === 'tools' ? X.vTools(a) : v === 'formulas' ? X.vFormulas() : v === 'dict' ? X.vDict() : v === 'train' ? X.vTrain(a) : v === 'exams' ? X.vExams() : v === 'files' ? X.vFiles() : v === 'more' ? X.vMore(NAV) : v === 'edt' ? vEdt() : v === 'modules' ? vModules() : v === 'mod' ? vMod(a) : v === 'chap' ? vChap(a) : v === 'ex' ? vEx(a) : v === 'review' ? vReview(a) : v === 'errors' ? vErrors() : v === 'settings' ? vSettings() : vHome();
  $('#main').innerHTML = topbar() + `<div class="page">${html}</div>`;
  bind(v, a);
}
function bind(v, a) {
  // البحث
  const q = $('#q'), qr = $('#qres');
  q.oninput = () => { const r = doSearch(q.value); qr.innerHTML = q.value.trim().length < 2 ? '' : r.length ? r.map(x => `<a href="${x.h}"><b>${esc(x.t)}</b><small>${esc(x.s)}</small></a>`).join('') : `<p>${t('noRes')}</p>`; };
  q.onblur = () => setTimeout(() => (qr.innerHTML = ''), 250);
  $('#tLang').onclick = () => { S.lang = lang === 'fr' ? 'ar' : lang === 'ar' ? 'en' : 'fr'; setLang(S.lang); save(); render(); };
  if (v === 'tools') X.bindTools(); if (v === 'dict') X.bindDict(); if (v === 'train') X.bindTrain(); if (v === 'exams') X.bindExams(); if (v === 'files') X.bindFiles();
  if (v === 'mod') document.querySelectorAll('[data-cy]').forEach(b => b.onchange = () => { const c = S.cycle[a] || (S.cycle[a] = []); c[+b.dataset.cy] = b.checked; save(); render(); });
  if (v === 'edt') document.querySelectorAll('[data-g]').forEach(b => b.onclick = () => { S.group = +b.dataset.g; save(); render(); });
  if (v === 'edt') document.querySelectorAll('[data-dd]').forEach(b => b.onclick = () => { edtDay = +b.dataset.dd; render(); });
  if (v === 'chap') {
    document.querySelectorAll('[data-ll]').forEach(b => b.onclick = () => { S.lessonLang[a] = b.dataset.ll; save(); render(); });
    $('#spk').onclick = e => speakLesson(e.currentTarget, lessonLang(a));
    $('#prn').onclick = () => window.print();
    $('#notes').oninput = e => { S.notes[a] = e.target.value; save(); };
    $('#doneBtn').onclick = () => { S.done[a] = !S.done[a]; if (!S.done[a]) delete S.done[a]; save(); render(); if (S.done[a]) toast('🎉 ' + t('done')); };
  }
  if (v === 'ex') {
    $('#exMod').onchange = e => { location.hash = 'ex/' + e.target.value; EX.mod = e.target.value; EX.cur = null; render(); };
    document.querySelectorAll('[data-ty]').forEach(b => b.onclick = () => { EX.type = b.dataset.ty; EX.cur = null; render(); });
    bindEx(EX.cur, 'exA', exResult);
    $('#newEx').onclick = () => { EX.cur = makeEx(EX.mod, EX.type); render(); window.scrollTo(0, 0); const i = $('#exAIn'); if (i && matchMedia('(min-width: 800px)').matches) i.focus(); };
  }
  if (v === 'review') {
    $('#rvMod').onchange = e => { location.hash = 'review/' + e.target.value; };
    const f = $('#flip'); if (f) f.onclick = () => { RV.flip = true; render(); };
    document.querySelectorAll('[data-rate]').forEach(b => b.onclick = () => rate(+b.dataset.rate));
    const mo = $('#rvMore'); if (mo) mo.onclick = () => { const all = shuffle(dueCards(RV.mod).all).slice(0, 10); RV.q = all; RV.i = 0; RV.done = 0; render(); };
  }
  if (v === 'errors') {
    const c = $('#clrErr'); if (c) c.onclick = () => { S.errors = []; save(); render(); };
    document.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { S.errors = S.errors.filter(x => x.id !== +b.dataset.rm); save(); render(); });
    document.querySelectorAll('[data-retry]').forEach(b => b.onclick = () => { const er = S.errors.find(x => x.id === +b.dataset.retry); const box = $('#rt' + er.id); box.innerHTML = exCard(er.e, 'r' + er.id); bindEx(er.e, 'r' + er.id, ok => { if (ok) { S.errors = S.errors.filter(x => x.id !== er.id); save(); toast('👍'); } }); });
  }
  if (v === 'settings') {
    $('#sName').oninput = e => { S.name = e.target.value; save(); };
    $('#sGoal').onchange = e => { S.goal = Math.max(10, +e.target.value || 60); save(); };
    document.querySelectorAll('[data-sg]').forEach(b => b.onclick = () => { S.group = +b.dataset.sg; save(); render(); });
    $('#instBtn').onclick = async () => { if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; } else toast(/iphone|ipad/i.test(navigator.userAgent) ? t('iosInstall') : t('pcInstall')); };
    $('#expB').onclick = () => { const b = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' }); const u = URL.createObjectURL(b); const x = document.createElement('a'); x.href = u; x.download = `meec-sauvegarde-${today()}.json`; x.click(); setTimeout(() => URL.revokeObjectURL(u), 3000); };
    $('#impB').onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(s => { const d = JSON.parse(s); if (d.v !== 1) throw 0; S = { ...structuredClone(DEF), ...d }; setLang(S.lang); save(); toast(t('imported')); render(); }).catch(() => toast(t('badFile'))); };
    $('#rst').onclick = () => { if (confirm(t('confirmReset'))) { localStorage.removeItem(KEY); S = structuredClone(DEF); setLang(S.lang); render(); onboarding(); } };
  }
  if (render.last !== location.hash) window.scrollTo(0, 0); render.last = location.hash;
}
X.init({ get S() { return S; }, save, toast, MODS, MOD, CH, render, today, makeEx, checkAns, exCard, bindEx, shuffle, logMin });
addEventListener('hashchange', render);
setLang(S.lang); render();
if (!S.onboarded) onboarding();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
if (location.search.includes('debug')) window.APP = { get S() { return S; }, MODS, CH, GENS, makeEx, render };
