// استعمال الزمن — DUT MEEC S1, Groupes 1 et 2 (EST Oujda)
export const SEM_START = new Date(2026, 8, 21); // الاثنين 21/09/2026
export const SEM_END = new Date(2027, 0, 9, 23, 59);
export const SLOTS = [[8, 10], [10, 12], [12, 14], [14, 16], [16, 18]];
// d: 0=الاثنين … 5=السبت ؛ s: رقم الحصة ف SLOTS
export const CLASSES = [
  { d: 0, s: 0, mod: 'fr', type: 'CM/TD', prof: 'HAMMAOUI Abdelkader', hours: '18h CM + 5h TD', w: [1, 12], room: 'ENCG / Biblio' },
  { d: 0, s: 3, mod: 'eco', type: 'CM/TD', prof: 'MOKHTARI Karima', hours: '30h CM / 16h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 0, s: 4, mod: 'eco', type: 'CM/TD', prof: 'MOKHTARI Karima', hours: '30h CM / 16h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 1, s: 0, mod: 'math', type: 'CM/TD', prof: 'AISSAOUI Zoubida', hours: '24h CM / 23h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 1, s: 1, mod: 'math', type: 'CM/TD', prof: 'AISSAOUI Zoubida', hours: '24h CM / 23h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 1, s: 3, mod: 'en', type: 'CM/TD', prof: 'HERRAG El Hassan', hours: '18h CM + 5h TD', w: [1, 12], room: 'ENCG / Biblio' },
  { d: 2, s: 0, mod: 'compta', type: 'CM/TD', prof: 'MARKAOUI Kawtar', hours: '28h CM / 18h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 2, s: 1, mod: 'compta', type: 'CM/TD', prof: 'MARKAOUI Kawtar', hours: '28h CM / 18h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 2, s: 3, mod: 'num', type: 'CM/TP', prof: '…', hours: '18h CM / 28h TP', w: [1, 16], room: 'C1', g: 1 },
  { d: 2, s: 4, mod: 'num', type: 'CM/TP', prof: '…', hours: '18h CM / 28h TP', w: [1, 16], room: 'C1', g: 1 },
  { d: 3, s: 0, mod: 'mgt', type: 'CM/TD', prof: 'FILALI Saida', hours: '28h CM / 18h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 3, s: 1, mod: 'mgt', type: 'CM/TD', prof: 'FILALI Saida', hours: '28h CM / 18h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 4, s: 0, mod: 'metho', type: 'CM/TD', prof: 'BEN MOSTAFA Souad', hours: '30h CM / 18h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 4, s: 1, mod: 'metho', type: 'CM/TD', prof: 'BEN MOSTAFA Souad', hours: '30h CM / 18h TD', w: [1, 16], room: 'ENCG / Biblio' },
  { d: 4, s: 3, mod: 'num', type: 'CM/TP', prof: '…', hours: '18h CM / 28h TP', w: [1, 16], room: 'C1', g: 2 },
  { d: 4, s: 4, mod: 'num', type: 'CM/TP', prof: '…', hours: '18h CM / 28h TP', w: [1, 16], room: 'C1', g: 2 },
  { d: 5, s: 0, mod: 'ds', type: '', prof: '', hours: '', w: [1, 16], room: '' },
  { d: 5, s: 1, mod: 'ds', type: '', prof: '', hours: '', w: [1, 16], room: '' },
];
export const DAYS = { fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'], ar: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'], en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] };
export function weekNo(date = new Date()) { return Math.floor((date - SEM_START) / (7 * 864e5)) + 1; }
export const myClasses = g => CLASSES.filter(c => !c.g || !g || c.g === g);
// الحصة الجاية (ولا اللي دايرة دابا)
export function nextClass(g, now = new Date()) {
  if (now > SEM_END) return null;
  const list = myClasses(g);
  for (let k = 0; k < 21; k++) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + k);
    if (day < new Date(SEM_START.getFullYear(), SEM_START.getMonth(), SEM_START.getDate())) continue;
    const dow = (day.getDay() + 6) % 7; const wk = weekNo(day);
    const todays = list.filter(c => c.d === dow && wk >= c.w[0] && wk <= c.w[1]).sort((a, b) => a.s - b.s);
    for (const c of todays) {
      const st = new Date(day); st.setHours(SLOTS[c.s][0], 0, 0, 0); const en = new Date(day); en.setHours(SLOTS[c.s][1], 0, 0, 0);
      if (en > now) return { c, start: st, end: en, live: st <= now };
    }
  }
  return null;
}
