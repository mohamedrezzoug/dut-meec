// الرسومات (SVG) ديال الدروس — كتبدل اللغة مع التطبيق
import { L, lang } from './i18n.js?v=3';

const NV = '#1d3a6e', AC = '#e0761a', OK = '#1f8a5b', BD = '#c2412d', SOFT = '#eaf1fb', AS = '#fdf0e3', GR = '#e9f6ef', LN = '#c9d3e3', PU = '#6c4ab6';
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const W = (w, h, inner, cap) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" font-family="Tajawal, system-ui, sans-serif" direction="ltr">
<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${NV}"/></marker></defs>${inner}</svg>${cap ? `<figcaption>${esc(L(cap))}</figcaption>` : ''}</figure>`;
// نص (كيقبل \n)
const tx = (x, y, s, o = {}) => { const lines = String(L(s)).split('\n'); const fs = o.fs || 14; const y0 = y - (lines.length - 1) * fs * 0.6;
  return `<text x="${x}" y="${y0}" font-size="${fs}" font-weight="${o.b ? 800 : 600}" fill="${o.c || NV}" text-anchor="${o.a || 'middle'}" dominant-baseline="middle">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? fs * 1.2 : 0}">${esc(l)}</tspan>`).join('')}</text>`; };
const bx = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 10}" fill="${o.f || SOFT}" stroke="${o.s || NV}" stroke-width="${o.sw || 1.6}"/>` + (s != null ? tx(x + w / 2, y + h / 2, s, o) : '');
const ar = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || NV}" stroke-width="${o.w || 1.8}" ${o.d ? 'stroke-dasharray="5 4"' : ''} marker-end="url(#ah)"/>`;
const ln = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || NV}" stroke-width="${o.w || 1.6}" ${o.d ? 'stroke-dasharray="5 4"' : ''}/>`;
const pth = (f, a, b, X, Y, n = 80) => { let d = ''; for (let i = 0; i <= n; i++) { const x = a + (b - a) * i / n; d += (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(f(x)).toFixed(1); } return d; };
const axes = (x0, y0, x1, y1, xl, yl) => ar(x0, y0, x1, y0) + ar(x0, y0, x0, y1) + tx(x1 - 4, y0 + 18, xl, { a: 'end', fs: 13 }) + tx(x0 + 8, y1 - 2, yl, { a: 'start', fs: 13 });
const P = (fr, ar, en) => ({ fr, ar, en });

// مخططات عامة
function cycle(items, center, cap, o = {}) {
  const n = items.length, cx = 280, cy = o.cy || 165, R = o.R || 118, bw = o.bw || 130, bh = o.bh || 50; let s = '';
  items.forEach((it, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n, a2 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n;
    const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a), x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
    const mx = cx + R * 0.78 * Math.cos((a + a2) / 2), my = cy + R * 0.78 * Math.sin((a + a2) / 2);
    s += `<path d="M${(x + (mx - x) * 0.35).toFixed(1)} ${(y + (my - y) * 0.35).toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${(x2 + (mx - x2) * 0.35).toFixed(1)} ${(y2 + (my - y2) * 0.35).toFixed(1)}" fill="none" stroke="${AC}" stroke-width="2" marker-end="url(#ah)"/>`; });
  items.forEach((it, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; s += bx(cx + R * Math.cos(a) - bw / 2, cy + R * Math.sin(a) - bh / 2, bw, bh, it, { f: i % 2 ? AS : SOFT, fs: 13, b: 1 }); });
  if (center) s += `<circle cx="${cx}" cy="${cy}" r="44" fill="${NV}"/>` + tx(cx, cy, center, { c: '#fff', fs: 13, b: 1 });
  return W(560, cy * 2 + 10, s, cap);
}
function flow(items, cap, o = {}) {
  const n = items.length, bw = Math.min(o.bw || 150, (540 - (n - 1) * 26) / n), bh = o.bh || 62, gap = 26, tot = n * bw + (n - 1) * gap, x0 = (560 - tot) / 2; let s = '';
  const order = lang === 'ar' ? [...items.keys()].reverse() : [...items.keys()];
  order.forEach((idx, k) => { const x = x0 + k * (bw + gap); s += bx(x, 20, bw, bh, items[idx], { f: idx % 2 ? AS : SOFT, fs: o.fs || 13, b: 1 }); if (k < n - 1) s += ar(x + bw + 2, 20 + bh / 2, x + bw + gap - 2, 20 + bh / 2); });
  return W(560, bh + 40, s, cap);
}
function matrix(q, axesL, cap, cols = [GR, AS, SOFT, '#fde8e6']) {
  let s = ''; const x0 = 70, y0 = 40, w = 220, h = 120;
  q.forEach((it, i) => { const x = x0 + (i % 2) * (w + 10), y = y0 + Math.floor(i / 2) * (h + 10);
    s += bx(x, y, w, h, null, { f: cols[i] }) + tx(x + w / 2, y + 24, it[0], { b: 1, fs: 15 }) + tx(x + w / 2, y + 72, it[1], { fs: 12, c: '#334' }); });
  if (axesL) { s += tx(x0 + w / 2, 22, axesL[0], { fs: 12, c: AC, b: 1 }) + tx(x0 + w * 1.5 + 10, 22, axesL[1], { fs: 12, c: AC, b: 1 });
    s += `<text x="40" y="${y0 + h / 2}" font-size="12" font-weight="800" fill="${AC}" text-anchor="middle" transform="rotate(-90 40 ${y0 + h / 2})">${esc(L(axesL[2]))}</text>`;
    s += `<text x="40" y="${y0 + h * 1.5 + 10}" font-size="12" font-weight="800" fill="${AC}" text-anchor="middle" transform="rotate(-90 40 ${y0 + h * 1.5 + 10})">${esc(L(axesL[3]))}</text>`; }
  return W(560, 320, s, cap);
}
function pyramid(levels, cap) {
  const n = levels.length, H = 300, top = 20, base = 480, cx = 280; let s = ''; const cols = ['#c2412d', '#e0761a', '#e9b21a', '#1f8a5b', '#1d6fb8', '#6c4ab6'];
  levels.forEach((lv, i) => { const y1 = top + i * H / n, y2 = top + (i + 1) * H / n, w1 = base * (i / n), w2 = base * ((i + 1) / n);
    s += `<polygon points="${cx - w1 / 2},${y1} ${cx + w1 / 2},${y1} ${cx + w2 / 2},${y2} ${cx - w2 / 2},${y2}" fill="${cols[i % 6]}" stroke="#fff" stroke-width="2"/>`;
    s += tx(cx, (y1 + y2) / 2 + (i === 0 ? 10 : 0), lv, { c: '#fff', fs: i === 0 ? 11 : 13, b: 1 }); });
  return W(560, H + 40, s, cap);
}
function table(head, rows, cap, o = {}) {
  const cw = o.cw || head.map(() => 520 / head.length), rh = 30, x0 = 20; let s = '', y = 10;
  const cols = lang === 'ar' ? [...head.keys()].reverse() : [...head.keys()];
  const row = (cells, f, b) => { let x = x0; cols.forEach(ci => { s += `<rect x="${x}" y="${y}" width="${cw[ci]}" height="${rh}" fill="${f}" stroke="${LN}"/>` + tx(x + cw[ci] / 2, y + rh / 2, cells[ci], { fs: 12, b, c: b ? '#fff' : NV }); x += cw[ci]; }); y += rh; };
  row(head, NV, 1); rows.forEach((r, i) => row(r, i % 2 ? '#fff' : SOFT, 0));
  return W(560, y + 10, s, cap);
}

export const FIG = {
  // ----------------------------------------------------- Management
  pestel: () => { const it = [['P', P('Politique', 'سياسي', 'Political')], ['E', P('Économique', 'اقتصادي', 'Economic')], ['S', P('Socioculturel', 'اجتماعي-ثقافي', 'Social')], ['T', P('Technologique', 'تكنولوجي', 'Technological')], ['E', P('Écologique', 'بيئي', 'Environmental')], ['L', P('Légal', 'قانوني', 'Legal')]];
    let s = `<circle cx="280" cy="170" r="58" fill="${NV}"/>` + tx(280, 170, P('Entreprise', 'المقاولة', 'Company'), { c: '#fff', b: 1, fs: 15 });
    it.forEach(([k, v], i) => { const a = -Math.PI / 2 + i * Math.PI / 3, x = 280 + 135 * Math.cos(a), y = 170 + 120 * Math.sin(a); s += ln(280 + 58 * Math.cos(a), 170 + 58 * Math.sin(a), x - 40 * Math.cos(a), y - 28 * Math.sin(a), { d: 1, c: AC });
      s += bx(x - 70, y - 26, 140, 52, null, { f: i % 2 ? AS : SOFT }) + tx(x, y - 8, k, { b: 1, fs: 18, c: AC }) + tx(x, y + 12, v, { fs: 12 }); });
    return W(560, 340, s, P('L’analyse PESTEL : les 6 familles de facteurs du macro-environnement', 'تحليل PESTEL: 6 عائلات ديال العوامل ف المحيط العام', 'PESTEL analysis: the 6 families of macro-environment factors')); },
  podc: () => cycle([P('Planifier', 'التخطيط', 'Plan'), P('Organiser', 'التنظيم', 'Organise'), P('Diriger', 'التوجيه/القيادة', 'Lead'), P('Contrôler', 'المراقبة', 'Control')], P('Management', 'التسيير', 'Management'), P('Les 4 fonctions du management (cycle PODC)', 'الوظائف الأربع ديال التسيير (دورة PODC)', 'The 4 functions of management (POLC cycle)')),
  maslow: () => pyramid([P('Accomplissement', 'تحقيق الذات', 'Self-actualisation'), P('Estime', 'التقدير', 'Esteem'), P('Appartenance', 'الانتماء', 'Belonging'), P('Sécurité', 'الأمان', 'Safety'), P('Besoins physiologiques', 'الحاجات الفيزيولوجية', 'Physiological needs')], P('La pyramide des besoins de Maslow (on monte d’un niveau quand le précédent est satisfait)', 'هرم الحاجات ديال ماسلو', 'Maslow’s hierarchy of needs')),
  swot: () => matrix([[P('Forces', 'نقاط القوة', 'Strengths'), P('Atouts internes\n(savoir-faire, marque…)', 'مؤهلات داخلية\n(خبرة، علامة…)', 'Internal assets\n(know-how, brand…)')], [P('Faiblesses', 'نقاط الضعف', 'Weaknesses'), P('Limites internes\n(coûts élevés…)', 'حدود داخلية\n(تكاليف مرتفعة…)', 'Internal limits\n(high costs…)')], [P('Opportunités', 'الفرص', 'Opportunities'), P('Tendances externes\nfavorables', 'توجهات خارجية\nمساعدة', 'Favourable\nexternal trends')], [P('Menaces', 'التهديدات', 'Threats'), P('Risques externes\n(concurrence…)', 'مخاطر خارجية\n(المنافسة…)', 'External risks\n(competition…)')]],
    [P('Positif', 'إيجابي', 'Positive'), P('Négatif', 'سلبي', 'Negative'), P('Interne', 'داخلي', 'Internal'), P('Externe', 'خارجي', 'External')], P('La matrice SWOT', 'مصفوفة SWOT', 'The SWOT matrix')),
  orga: () => { let s = bx(205, 15, 150, 44, P('Direction générale', 'المديرية العامة', 'General management'), { f: NV, c: '#fff', b: 1, fs: 13 });
    const ch = [P('Commercial\n& Marketing', 'التجاري\nوالتسويق', 'Sales\n& Marketing'), P('Production', 'الإنتاج', 'Production'), P('Finance\n& Compta', 'المالية\nوالمحاسبة', 'Finance\n& Accounting'), P('Ressources\nhumaines', 'الموارد\nالبشرية', 'Human\nresources')];
    s += ln(280, 59, 280, 85) + ln(80, 85, 480, 85); ch.forEach((c, i) => { const x = 20 + i * 135; s += ln(x + 60, 85, x + 60, 105) + bx(x, 105, 120, 56, c, { fs: 12, b: 1, f: i % 2 ? AS : SOFT }); });
    return W(560, 180, s, P('Structure fonctionnelle : les services sont organisés par fonction', 'البنية الوظيفية: المصالح منظمة حسب الوظيفة', 'Functional structure: departments organised by function')); },
  decision: () => flow([P('Identifier\nle problème', 'تحديد\nالمشكل', 'Identify\nthe problem'), P('Chercher des\nsolutions', 'البحث على\nالحلول', 'Look for\nsolutions'), P('Évaluer et\nchoisir', 'التقييم\nوالاختيار', 'Evaluate\n& choose'), P('Mettre en\nœuvre', 'التنفيذ', 'Implement'), P('Contrôler', 'المراقبة', 'Control')], P('Le processus de décision (modèle IMC de H. Simon enrichi)', 'مراحل اتخاذ القرار', 'The decision-making process'), { bw: 96, fs: 12 }),
  // ----------------------------------------------------- Économie
  circuit: () => { let s = bx(30, 120, 140, 70, P('Ménages', 'الأسر', 'Households'), { b: 1, fs: 16 }) + bx(390, 120, 140, 70, P('Entreprises', 'المقاولات', 'Firms'), { b: 1, fs: 16, f: AS });
    s += bx(215, 250, 130, 50, P('État', 'الدولة', 'State'), { b: 1, fs: 14, f: GR }) + bx(215, 15, 130, 50, P('Banques', 'الأبناك', 'Banks'), { b: 1, fs: 14, f: '#efe9fb' });
    s += `<path d="M170 135 C 260 85, 300 85, 390 135" fill="none" stroke="${OK}" stroke-width="2.2" marker-end="url(#ah)"/>` + tx(280, 102, P('Travail', 'العمل', 'Labour'), { fs: 12, c: OK });
    s += `<path d="M390 175 C 300 225, 260 225, 170 175" fill="none" stroke="${OK}" stroke-width="2.2" marker-end="url(#ah)"/>` + tx(280, 212, P('Biens et services', 'السلع والخدمات', 'Goods & services'), { fs: 12, c: OK });
    s += `<path d="M390 150 C 300 120, 260 120, 170 150" fill="none" stroke="${AC}" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/>` + tx(280, 136, P('Salaires', 'الأجور', 'Wages'), { fs: 12, c: AC });
    s += `<path d="M170 162 C 260 190, 300 190, 390 162" fill="none" stroke="${AC}" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/>` + tx(280, 178, P('Dépenses de consommation', 'نفقات الاستهلاك', 'Consumer spending'), { fs: 12, c: AC });
    s += ar(100, 190, 215, 268, { d: 1 }) + ar(460, 190, 345, 268, { d: 1 }) + tx(130, 245, P('Impôts', 'الضرائب', 'Taxes'), { fs: 12 }) + tx(430, 245, P('Impôts', 'الضرائب', 'Taxes'), { fs: 12 });
    s += ar(100, 120, 215, 48, { d: 1 }) + ar(345, 48, 460, 120, { d: 1 }) + tx(130, 75, P('Épargne', 'الادخار', 'Savings'), { fs: 12 }) + tx(440, 75, P('Crédits', 'القروض', 'Loans'), { fs: 12 });
    return W(560, 315, s, P('Le circuit économique : flux réels (trait plein) et flux monétaires (pointillés)', 'الدورة الاقتصادية: التدفقات الحقيقية (خط متصل) والنقدية (متقطع)', 'The circular flow: real flows (solid) and money flows (dashed)')); },
  offreDemande: () => { const X = x => 70 + x * 4.3, Y = y => 280 - y * 2.4; let s = axes(70, 280, 520, 20, P('Quantité Q', 'الكمية Q', 'Quantity Q'), P('Prix P', 'الثمن P', 'Price P'));
    s += `<path d="${pth(q => 100 - q * 0.9, 5, 100, X, Y)}" stroke="${BD}" stroke-width="3" fill="none"/>` + `<path d="${pth(q => 10 + q * 0.9, 0, 95, X, Y)}" stroke="${OK}" stroke-width="3" fill="none"/>`;
    s += ln(X(50), Y(55), X(50), 280, { d: 1 }) + ln(70, Y(55), X(50), Y(55), { d: 1 }) + `<circle cx="${X(50)}" cy="${Y(55)}" r="6" fill="${AC}"/>`;
    s += tx(X(50) + 14, Y(55) - 14, P('Équilibre E', 'التوازن E', 'Equilibrium E'), { a: 'start', b: 1, fs: 13, c: AC }) + tx(X(50), 294, 'Q*', { fs: 13, b: 1 }) + tx(56, Y(55), 'P*', { fs: 13, b: 1 });
    s += tx(X(96), Y(18), P('Demande D', 'الطلب D', 'Demand D'), { a: 'end', fs: 13, c: BD, b: 1 }) + tx(X(92), Y(98), P('Offre O', 'العرض O', 'Supply S'), { a: 'end', fs: 13, c: OK, b: 1 });
    return W(560, 305, s, P('Le prix d’équilibre se fixe là où l’offre rencontre la demande', 'ثمن التوازن كيتحدد فين كيتلاقى العرض مع الطلب', 'The equilibrium price is where supply meets demand')); },
  couts: () => { const X = q => 70 + q * 42, Y = c => 280 - c * 9; let s = axes(70, 280, 520, 20, P('Quantité q', 'الكمية q', 'Quantity q'), P('Coût unitaire', 'التكلفة للوحدة', 'Unit cost'));
    const CM = q => 4 + 8 / q + 0.6 * q, Cm = q => 4 + 1.2 * q;
    s += `<path d="${pth(CM, 0.7, 10, X, Y)}" stroke="${NV}" stroke-width="3" fill="none"/><path d="${pth(Cm, 0, 10, X, Y)}" stroke="${AC}" stroke-width="3" fill="none"/>`;
    const q0 = Math.sqrt(8 / 0.6); s += `<circle cx="${X(q0)}" cy="${Y(CM(q0))}" r="6" fill="${BD}"/>` + tx(X(q0) + 10, Y(CM(q0)) + 22, P('Optimum technique\n(Cm = CM min)', 'الأمثل التقني\n(Cm = CM أدنى)', 'Technical optimum\n(MC = min AC)'), { a: 'start', fs: 12, c: BD, b: 1 });
    s += tx(X(9.6), Y(CM(10)) - 14, P('Coût moyen CM', 'التكلفة المتوسطة CM', 'Average cost AC'), { a: 'end', fs: 12, b: 1 }) + tx(X(8.6), Y(Cm(10)) + 4, P('Coût marginal Cm', 'التكلفة الحدية Cm', 'Marginal cost MC'), { a: 'end', fs: 12, c: AC, b: 1 });
    return W(560, 300, s, P('Le coût marginal coupe le coût moyen en son minimum', 'التكلفة الحدية كتقطع التكلفة المتوسطة ف أدنى نقطة ديالها', 'Marginal cost crosses average cost at its minimum')); },
  kaldor: () => { const c = [280, 165]; let s = `<polygon points="280,25 470,165 280,305 90,165" fill="none" stroke="${LN}" stroke-width="2"/><polygon points="280,60 420,165 280,250 140,165" fill="${GR}" stroke="${OK}" stroke-width="2.5" opacity=".9"/>`;
    s += ln(280, 25, 280, 305, { c: LN }) + ln(90, 165, 470, 165, { c: LN });
    s += tx(280, 14, P('Croissance du PIB (%)', 'نمو الناتج الداخلي (%)', 'GDP growth (%)'), { b: 1, fs: 13 }) + tx(486, 165, P('Inflation\n(faible)', 'التضخم\n(منخفض)', 'Inflation\n(low)'), { b: 1, fs: 12, a: 'start' });
    s += tx(280, 322, P('Chômage (faible)', 'البطالة (منخفضة)', 'Unemployment (low)'), { b: 1, fs: 13 }) + tx(74, 165, P('Solde\nextérieur', 'الرصيد\nالخارجي', 'External\nbalance'), { b: 1, fs: 12, a: 'end' });
    return W(560, 335, s, P('Le « carré magique » de Kaldor : plus la surface est grande, meilleure est la situation', '«المربع السحري» ديال كالدور: كلما كبرات المساحة، كلما كانت الوضعية حسن', 'Kaldor’s “magic square”: the larger the area, the better')); },
  // ----------------------------------------------------- Comptabilité
  bilan: () => { const xa = lang === 'ar' ? 280 : 20, xp = lang === 'ar' ? 20 : 280; let s = bx(xa, 10, 260, 36, P('ACTIF (emplois)', 'الأصول (الاستعمالات)', 'ASSETS (uses)'), { f: NV, c: '#fff', b: 1, r: 4 }) + bx(xp, 10, 260, 36, P('PASSIF (ressources)', 'الخصوم (الموارد)', 'LIABILITIES (resources)'), { f: AC, c: '#fff', b: 1, r: 4, s: AC });
    const A = [[P('Actif immobilisé', 'الأصول الثابتة', 'Fixed assets'), P('terrains, constructions,\nmatériel, ordinateurs', 'أراضي، بنايات،\nمعدات، حواسيب', 'land, buildings,\nequipment, computers'), 90], [P('Actif circulant', 'الأصول المتداولة', 'Current assets'), P('stocks, clients', 'المخزون، الزبناء', 'inventory, customers'), 70], [P('Trésorerie-actif', 'خزينة الأصول', 'Cash'), P('banque, caisse', 'البنك، الصندوق', 'bank, cash'), 50]];
    const B = [[P('Financement permanent', 'التمويل الدائم', 'Permanent funding'), P('capital, résultat,\ndettes de financement', 'الرأسمال، النتيجة،\nديون التمويل', 'equity, profit,\nlong-term debt'), 100], [P('Passif circulant', 'الخصوم المتداولة', 'Current liabilities'), P('fournisseurs, État', 'الموردون، الدولة', 'suppliers, State'), 60], [P('Trésorerie-passif', 'خزينة الخصوم', 'Bank overdraft'), P('crédits de trésorerie', 'قروض الخزينة', 'short-term credit'), 50]];
    const col = (list, x, f) => { let y = 46; list.forEach(([h, d, hh]) => { s += bx(x, y, 260, hh, null, { f, r: 0, s: LN }) + tx(x + 130, y + 18, h, { b: 1, fs: 13 }) + tx(x + 130, y + hh / 2 + 12, d, { fs: 11, c: '#445' }); y += hh; }); };
    col(A, xa, SOFT); col(B, xp, AS);
    s += tx(280, 276, P('TOTAL ACTIF = TOTAL PASSIF', 'مجموع الأصول = مجموع الخصوم', 'TOTAL ASSETS = TOTAL LIABILITIES'), { b: 1, fs: 14, c: BD });
    return W(560, 292, s, P('Le bilan selon le CGNC (Code général de normalisation comptable, Maroc)', 'الميزانية حسب المدونة العامة للتطبيع المحاسبي (المغرب)', 'The balance sheet under the Moroccan CGNC')); },
  compteT: () => { let s = tx(280, 18, P('5141 Banques', '5141 الأبناك', '5141 Banks'), { b: 1, fs: 16 }) + ln(80, 34, 480, 34, { w: 3 }) + ln(280, 34, 280, 220, { w: 3 });
    s += tx(180, 52, P('Débit', 'مدين', 'Debit'), { b: 1, c: OK }) + tx(380, 52, P('Crédit', 'دائن', 'Credit'), { b: 1, c: BD });
    const d = [P('Apport 50 000', 'مساهمة 50 000', 'Capital 50,000'), P('Vente 12 000', 'بيع 12 000', 'Sale 12,000')], c = [P('Achat 8 000', 'شراء 8 000', 'Purchase 8,000'), P('Loyer 3 000', 'كراء 3 000', 'Rent 3,000')];
    d.forEach((v, i) => { s += tx(180, 84 + i * 28, v, { fs: 13 }); }); c.forEach((v, i) => { s += tx(380, 84 + i * 28, v, { fs: 13 }); });
    s += ln(100, 150, 460, 150, { c: LN }) + tx(180, 170, '62 000', { b: 1 }) + tx(380, 170, '11 000', { b: 1 });
    s += bx(150, 188, 260, 34, P('Solde débiteur = 51 000', 'رصيد مدين = 51 000', 'Debit balance = 51,000'), { f: GR, s: OK, fs: 13, b: 1 });
    return W(560, 232, s, P('Un compte « en T » : à gauche le débit, à droite le crédit', 'حساب على شكل T: المدين على اليسار والدائن على اليمين', 'A T-account: debit on the left, credit on the right')); },
  facture: () => table([P('Élément', 'العنصر', 'Item'), P('Montant (DH)', 'المبلغ (درهم)', 'Amount (MAD)')], [[P('Prix brut', 'الثمن الخام', 'Gross price'), '10 000'], [P('− Remise 5 %', '− تخفيض 5 %', '− Discount 5%'), '− 500'], [P('= Net commercial', '= الصافي التجاري', '= Commercial net'), '9 500'], [P('− Escompte 2 %', '− خصم 2 %', '− Cash discount 2%'), '− 190'], [P('= Net financier (HT)', '= الصافي المالي (خارج الرسم)', '= Net (excl. VAT)'), '9 310'], [P('+ TVA 20 %', '+ الضريبة على القيمة المضافة 20 %', '+ VAT 20%'), '1 862'], [P('= Net à payer (TTC)', '= الصافي للأداء', '= Total (incl. VAT)'), '11 172']], P('Calcul d’une facture : réductions commerciales, escompte puis TVA', 'حساب فاتورة: التخفيضات التجارية، الخصم ومن بعد الضريبة', 'Invoice calculation: trade discounts, cash discount then VAT'), { cw: [320, 200] }),
  amort: () => { const X = i => 90 + i * 80, Y = v => 260 - v * 0.02; let s = axes(70, 260, 520, 20, P('Années', 'السنوات', 'Years'), P('VNC (DH)', 'القيمة المحاسبية الصافية', 'Net book value'));
    for (let i = 0; i <= 5; i++) { const v = 10000 - i * 2000; s += `<rect x="${X(i) - 22}" y="${Y(v)}" width="44" height="${260 - Y(v)}" fill="${i ? SOFT : NV}" stroke="${NV}"/>` + tx(X(i), Y(v) - 10, v.toLocaleString('fr-FR').replace(/ /g, ' '), { fs: 11, b: 1 }) + tx(X(i), 274, i ? 'N+' + (i - 1) : P('Achat', 'الشراء', 'Purchase'), { fs: 11 }); }
    return W(560, 290, s, P('Amortissement linéaire : 10 000 DH sur 5 ans → 2 000 DH par an', 'الاهتلاك الخطي: 10 000 درهم على 5 سنين ← 2 000 ف العام', 'Straight-line depreciation: 10,000 over 5 years → 2,000 per year')); },
  journal: () => table([P('Date', 'التاريخ', 'Date'), P('Débit', 'مدين', 'Debit'), P('Crédit', 'دائن', 'Credit'), P('Libellé', 'البيان', 'Description'), P('Débit', 'مدين', 'Debit'), P('Crédit', 'دائن', 'Credit')],
    [['05/10', '6111', '', P('Achats de marchandises', 'مشتريات البضائع', 'Purchases of goods'), '10 000', ''], ['', '34552', '', P('État, TVA récupérable', 'الدولة، الضريبة القابلة للاسترجاع', 'State, recoverable VAT'), '2 000', ''], ['', '', '4411', P('Fournisseurs', 'الموردون', 'Suppliers'), '', '12 000'], ['', '', '', P('Facture n° 125', 'الفاتورة رقم 125', 'Invoice no. 125'), '', '']],
    P('Une écriture au journal : total débit = total crédit', 'قيد ف اليومية: مجموع المدين = مجموع الدائن', 'A journal entry: total debit = total credit'), { cw: [60, 60, 60, 200, 70, 70] }),
  // ----------------------------------------------------- Maths
  profit: () => { const X = q => 70 + q * 4.4, Y = v => 250 - v * 0.09; let s = axes(70, 250, 520, 20, P('Quantité q', 'الكمية q', 'Quantity q'), P('Bénéfice B(q)', 'الربح B(q)', 'Profit B(q)'));
    const B = q => -0.5 * q * q + 50 * q - 600; s += ln(70, Y(0), 520, Y(0), { c: LN }) + `<path d="${pth(B, 12, 88, X, Y)}" stroke="${OK}" stroke-width="3" fill="none"/>`;
    s += `<circle cx="${X(50)}" cy="${Y(650)}" r="6" fill="${BD}"/>` + ln(X(50), Y(650), X(50), 250, { d: 1 }) + tx(X(50) + 10, Y(650) - 12, P('Maximum : B′(q) = 0', 'القيمة القصوى: B′(q) = 0', 'Maximum: B′(q) = 0'), { a: 'start', b: 1, fs: 13, c: BD }) + tx(X(50), 264, 'q = 50', { fs: 12, b: 1 });
    return W(560, 280, s, P('Le bénéfice est maximal quand sa dérivée s’annule', 'الربح كيكون فالأقصى ملي المشتقة ديالو كتولي صفر', 'Profit is highest where its derivative is zero')); },
  interets: () => { const X = n => 70 + n * 42, Y = v => 260 - (v - 1000) * 0.17; let s = axes(70, 260, 520, 20, P('Années', 'السنوات', 'Years'), P('Valeur acquise', 'القيمة المكتسبة', 'Future value'));
    s += `<path d="${pth(n => 1000 * (1 + 0.1 * n), 0, 10, X, Y)}" stroke="${NV}" stroke-width="3" fill="none"/><path d="${pth(n => 1000 * Math.pow(1.1, n), 0, 10, X, Y)}" stroke="${AC}" stroke-width="3" fill="none"/>`;
    s += tx(X(10), Y(2000) + 16, P('Intérêts simples\nC(1 + i·n)', 'الفوائد البسيطة\nC(1 + i·n)', 'Simple interest\nC(1 + i·n)'), { a: 'end', fs: 12, b: 1 }) + tx(X(9.6), Y(2594) - 12, P('Intérêts composés C(1 + i)ⁿ', 'الفوائد المركبة C(1 + i)ⁿ', 'Compound interest C(1 + i)ⁿ'), { a: 'end', fs: 12, b: 1, c: AC });
    return W(560, 280, s, P('1 000 DH placés à 10 % : les intérêts composés « font boule de neige »', '1000 درهم بـ 10 %: الفوائد المركبة كتكبر بحال كرة الثلج', '1,000 at 10%: compound interest snowballs')); },
  timeline: () => { let s = ar(40, 90, 530, 90); for (let i = 0; i <= 5; i++) { const x = 60 + i * 90; s += ln(x, 82, x, 98) + tx(x, 116, String(i), { b: 1 }); if (i) s += ar(x, 80, x, 40, { c: OK }) + tx(x, 30, 'a', { b: 1, c: OK }); }
    s += `<path d="M330 40 Q 200 10 70 70" fill="none" stroke="${AC}" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/>` + tx(250, 140, P('V₀ = a × (1 − (1 + i)⁻ⁿ) / i', 'V₀ = a × (1 − (1 + i)⁻ⁿ) / i', 'V₀ = a × (1 − (1 + i)⁻ⁿ) / i'), { b: 1, c: AC, fs: 15 });
    return W(560, 160, s, P('Des annuités constantes a, actualisées à la date 0', 'دفعات ثابتة a محينة للتاريخ 0', 'Constant annuities a, discounted to date 0')); },
  histo: () => { const v = [2, 5, 9, 12, 8, 4], X = i => 90 + i * 70, Y = n => 250 - n * 17; let s = axes(70, 250, 520, 20, P('Notes /20', 'النقط /20', 'Marks /20'), P('Effectif', 'العدد', 'Frequency'));
    v.forEach((n, i) => { s += `<rect x="${X(i)}" y="${Y(n)}" width="68" height="${250 - Y(n)}" fill="${i === 3 ? AC : SOFT}" stroke="${NV}"/>` + tx(X(i) + 34, Y(n) - 10, String(n), { b: 1, fs: 12 }) + tx(X(i) + 34, 266, `[${i * 3 + 2};${i * 3 + 5}[`, { fs: 11 }); });
    return W(560, 285, s, P('Histogramme d’une série statistique (la classe modale est en orange)', 'مدرج تكراري (الفئة المنوالية بالبرتقالي)', 'Histogram of a data set (the modal class is orange)')); },
  // ----------------------------------------------------- Numérique
  units: () => { const u = ['1 o = 8 bits', '1 Ko = 1 024 o', '1 Mo = 1 024 Ko', '1 Go = 1 024 Mo', '1 To = 1 024 Go']; let s = '';
    u.forEach((x, i) => { s += bx(30 + i * 100, 200 - i * 42, 100, 42 + i * 42, null, { f: [SOFT, AS, GR, '#efe9fb', '#fde8e6'][i], r: 4 }) + tx(80 + i * 100, 222 - i * 42, x, { fs: 12, b: 1 }); });
    return W(560, 260, s, P('Les unités de stockage (×1 024 à chaque étape)', 'وحدات التخزين (×1024 ف كل مرحلة)', 'Storage units (×1,024 at each step)')); },
  excel: () => { const H = ['', 'A', 'B', 'C', 'D'], R = [['1', P('Produit', 'المنتوج', 'Product'), P('Prix', 'الثمن', 'Price'), P('Qté', 'الكمية', 'Qty'), 'Total'], ['2', 'Stylo', '5', '120', '=B2*C2'], ['3', 'Cahier', '12', '80', '=B3*C3'], ['4', 'Sac', '150', '10', '=B4*C4'], ['5', '', '', '', '=SOMME(D2:D4)']];
    let s = ''; const cw = [40, 130, 100, 100, 150], x0 = 20; let y = 10; const row = (cells, head) => { let x = x0; cells.forEach((c, i) => { const f = head || i === 0 ? '#e7ebf0' : (String(L(c)).startsWith('=') ? '#fff7e6' : '#fff'); s += `<rect x="${x}" y="${y}" width="${cw[i]}" height="30" fill="${f}" stroke="#b9c3cf"/>` + tx(x + cw[i] / 2, y + 15, c, { fs: 12, b: head || i === 0, c: String(L(c)).startsWith('=') ? AC : NV }); x += cw[i]; }); y += 30; };
    row(H, 1); R.forEach(r => row(r)); s += tx(280, y + 22, P('D5 affiche 2 900 (600 + 960 + 1 500)', 'D5 كتعرض 2 900 (600 + 960 + 1 500)', 'D5 shows 2,900 (600 + 960 + 1,500)'), { b: 1, c: OK });
    return W(560, y + 40, s, P('Une feuille Excel : les formules commencent par =', 'ورقة Excel: الصيغ كتبدا بـ =', 'An Excel sheet: formulas start with =')); },
  search: () => table([P('Opérateur', 'المعامل', 'Operator'), P('Exemple', 'مثال', 'Example'), P('Effet', 'التأثير', 'Effect')], [['" "', '"e-commerce Maroc"', P('expression exacte', 'العبارة بالضبط', 'exact phrase')], ['-', 'marketing -emploi', P('exclut un mot', 'كيحيد كلمة', 'excludes a word')], ['OR', 'SWOT OR PESTEL', P("l'un ou l'autre", 'هادي ولا هادي', 'either one')], ['site:', 'site:hcp.ma chômage', P('dans un seul site', 'ف موقع واحد', 'within one site')], ['filetype:', 'filetype:pdf bilan', P('type de fichier', 'نوع الملف', 'file type')]], P('Les opérateurs de recherche avancée (Google)', 'معاملات البحث المتقدم (Google)', 'Advanced search operators (Google)'), { cw: [110, 220, 190] }),
  // ----------------------------------------------------- Français / Anglais / Méthodo
  jakobson: () => { let s = bx(20, 120, 120, 50, P('Émetteur', 'المرسل', 'Sender'), { b: 1 }) + bx(420, 120, 120, 50, P('Récepteur', 'المستقبل', 'Receiver'), { b: 1 }) + bx(220, 120, 120, 50, P('Message', 'الرسالة', 'Message'), { b: 1, f: AS });
    s += ar(140, 145, 218, 145) + ar(340, 145, 418, 145) + bx(220, 30, 120, 44, P('Contexte', 'السياق', 'Context'), { f: GR }) + bx(220, 210, 120, 44, P('Canal', 'القناة', 'Channel'), { f: GR }) + bx(220, 270, 120, 40, P('Code', 'الرمز (اللغة)', 'Code'), { f: GR });
    s += ln(280, 74, 280, 118, { d: 1 }) + ln(280, 172, 280, 208, { d: 1 });
    return W(560, 320, s, P('Le schéma de la communication de Jakobson (6 éléments)', 'خطاطة التواصل ديال ياكوبسون (6 عناصر)', 'Jakobson’s communication model (6 elements)')); },
  lettre: () => { let s = `<rect x="130" y="10" width="300" height="330" fill="#fff" stroke="${NV}" stroke-width="2" rx="4"/>`;
    const ln2 = (x, y, w, txt, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="16" rx="3" fill="${o.f || SOFT}"/>` + tx(x + w / 2, y + 8, txt, { fs: 10, b: o.b });
    s += ln2(145, 22, 120, P('Expéditeur', 'المرسل', 'Sender')) + ln2(295, 60, 120, P('Destinataire', 'المرسل إليه', 'Recipient')) + ln2(295, 90, 120, P('Lieu, date', 'المكان، التاريخ', 'Place, date'));
    s += ln2(145, 120, 200, P('Objet : …', 'الموضوع: …', 'Subject: …'), { f: AS, b: 1 }) + ln2(145, 146, 140, P('Formule d’appel', 'عبارة النداء', 'Salutation'));
    for (let i = 0; i < 6; i++) s += `<rect x="145" y="${172 + i * 18}" width="270" height="8" rx="3" fill="#e6ebf2"/>`;
    s += tx(280, 180 + 54, P('Corps : 3 paragraphes', 'المتن: 3 فقرات', 'Body: 3 paragraphs'), { fs: 11, c: AC, b: 1 }) + ln2(145, 288, 200, P('Formule de politesse', 'عبارة المجاملة', 'Closing')) + ln2(295, 314, 120, P('Signature', 'التوقيع', 'Signature'), { f: GR });
    return W(560, 350, s, P('La mise en page d’une lettre administrative ou commerciale', 'تصميم رسالة إدارية ولا تجارية', 'Layout of a formal business letter')); },
  tenses: () => { let s = ar(30, 120, 530, 120) + tx(280, 145, P('maintenant', 'دابا', 'now'), { b: 1, c: BD }) + ln(280, 100, 280, 140, { c: BD, w: 3 });
    s += bx(40, 40, 150, 46, 'Past simple\nI worked', { fs: 12, b: 1 }) + bx(205, 40, 150, 46, 'Present simple\nI work', { fs: 12, b: 1, f: AS }) + bx(370, 40, 150, 46, 'Future\nI will work', { fs: 12, b: 1, f: GR });
    s += bx(205, 170, 150, 46, 'Present continuous\nI am working', { fs: 12, b: 1, f: '#efe9fb' }) + ln(280, 124, 280, 168, { d: 1 });
    return W(560, 230, s, P('Les temps de base de l’anglais sur une ligne du temps', 'الأزمنة الأساسية ف الإنجليزية على خط الزمن', 'Basic English tenses on a timeline')); },
  eisenhower: () => matrix([[P('1. Faire maintenant', '1. دير دابا', '1. Do now'), P('révision du DS de samedi', 'مراجعة الفرض ديال السبت', 'revise for Saturday’s test')], [P('2. Planifier', '2. خطّط', '2. Schedule'), P('lire le cours, sport,\nprojet', 'قراية الدرس، الرياضة،\nالمشروع', 'read lessons, sport,\nproject')], [P('3. Déléguer / limiter', '3. فوّض / قلّل', '3. Delegate / limit'), P('certains messages,\ninterruptions', 'شي ميساجات،\nالمقاطعات', 'some messages,\ninterruptions')], [P('4. Éliminer', '4. حيّد', '4. Eliminate'), P('défilement sans fin\nsur les réseaux', 'التصفح بلا نهاية\nف الشبكات', 'endless scrolling\non social media')]],
    [P('Urgent', 'مستعجل', 'Urgent'), P('Pas urgent', 'ماشي مستعجل', 'Not urgent'), P('Important', 'مهم', 'Important'), P('Pas important', 'ماشي مهم', 'Not important')], P('La matrice d’Eisenhower pour décider quoi faire en premier', 'مصفوفة أيزنهاور باش تقرري شنو تديري الأول', 'The Eisenhower matrix to decide what comes first'), ['#fde8e6', GR, AS, SOFT]),
  cornell: () => { let s = `<rect x="110" y="10" width="340" height="300" fill="#fff" stroke="${NV}" stroke-width="2"/>` + ln(220, 10, 220, 240, { w: 2 }) + ln(110, 240, 450, 240, { w: 2 });
    s += tx(165, 120, P('Mots-clés\n& questions', 'كلمات مفاتيح\nوأسئلة', 'Keywords\n& questions'), { b: 1, fs: 13, c: AC }) + tx(335, 120, P('Notes prises\npendant le cours\n(idées, exemples,\nschémas)', 'الملاحظات\nف وقت الدرس\n(أفكار، أمثلة،\nخطاطات)', 'Notes taken\nduring class\n(ideas, examples,\ndiagrams)'), { fs: 13 }) + tx(280, 275, P('Résumé en 3–4 lignes (après le cours)', 'ملخص ف 3–4 سطور (من بعد الدرس)', '3–4 line summary (after class)'), { b: 1, fs: 13, c: OK });
    return W(560, 320, s, P('La méthode Cornell de prise de notes', 'طريقة كورنيل لأخذ الملاحظات', 'The Cornell note-taking method')); },
  pomodoro: () => cycle([P('25 min\ntravail', '25 دقيقة\nخدمة', '25 min\nwork'), P('5 min\npause', '5 دقايق\nراحة', '5 min\nbreak'), P('25 min\ntravail', '25 دقيقة\nخدمة', '25 min\nwork'), P('5 min\npause', '5 دقايق\nراحة', '5 min\nbreak'), P('×4 →\n20 min pause', '×4 ←\n20 دقيقة راحة', '×4 →\n20 min break')], '🍅', P('La technique Pomodoro', 'تقنية بومودورو', 'The Pomodoro technique'), { bw: 112 }),
  rapport: () => flow([P('Introduction\n(contexte,\nproblématique)', 'المقدمة\n(السياق،\nالإشكالية)', 'Introduction\n(context,\nquestion)'), P('Développement\n(2–3 parties)', 'العرض\n(2–3 أجزاء)', 'Body\n(2–3 parts)'), P('Conclusion\n(bilan,\nouverture)', 'الخاتمة\n(الحصيلة،\nالانفتاح)', 'Conclusion\n(summary,\nopening)'), P('Bibliographie\n& annexes', 'المراجع\nوالملاحق', 'References\n& appendices')], P('Le plan type d’un rapport ou d’un exposé', 'التصميم النموذجي ديال تقرير ولا عرض', 'Standard outline of a report or talk'), { bh: 80, fs: 12 }),
  marketing4p: () => matrix([[P('Produit', 'المنتوج', 'Product'), P('qualité, gamme,\nemballage, marque', 'الجودة، التشكيلة،\nالتعليب، العلامة', 'quality, range,\npackaging, brand')], [P('Prix', 'الثمن', 'Price'), P('tarif, promotions,\nconditions de paiement', 'الثمن، التخفيضات،\nشروط الأداء', 'price, promotions,\npayment terms')], [P('Distribution (Place)', 'التوزيع', 'Place'), P('magasins, site web,\nlivraison', 'المحلات، الموقع،\nالتوصيل', 'shops, website,\ndelivery')], [P('Communication (Promotion)', 'التواصل', 'Promotion'), P('publicité, réseaux\nsociaux, influenceurs', 'الإشهار، الشبكات\nالاجتماعية، المؤثرين', 'advertising, social\nmedia, influencers')]], null, P('Le marketing-mix : les 4 P', 'المزيج التسويقي: 4P', 'The marketing mix: the 4 Ps')),
};
export function figHTML(id) { try { return FIG[id] ? FIG[id]() : ''; } catch (e) { return ''; } }
