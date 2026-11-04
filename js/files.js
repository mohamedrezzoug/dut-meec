// ملفاتي: الملفات كتتخزن ف التليفون/الحاسوب (IndexedDB)
let DBP = null;
function db() {
  if (DBP) return DBP;
  DBP = new Promise((res, rej) => { const r = indexedDB.open('meec-files', 1); r.onupgradeneeded = () => r.result.createObjectStore('f', { keyPath: 'id' }); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  return DBP;
}
const tx = (mode, fn) => db().then(d => new Promise((res, rej) => { const t = d.transaction('f', mode); const s = t.objectStore('f'); const out = fn(s); t.oncomplete = () => res(out && out.result !== undefined ? out.result : out); t.onerror = () => rej(t.error); }));
export const addFile = (file, mod, note = '') => tx('readwrite', s => s.put({ id: Date.now() + '-' + Math.random().toString(36).slice(2, 7), name: file.name, type: file.type || '', size: file.size, mod, note, date: new Date().toISOString(), blob: file }));
export const allFiles = () => tx('readonly', s => s.getAll()).then(a => (a || []).sort((x, y) => y.date.localeCompare(x.date)));
export const getFile = id => tx('readonly', s => s.get(id));
export const delFile = id => tx('readwrite', s => s.delete(id));
export const setMod = (id, mod) => getFile(id).then(f => tx('readwrite', s => s.put({ ...f, mod })));
export const fsz = b => b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';
export const ficon = t => /pdf/.test(t) ? '📕' : /image/.test(t) ? '🖼️' : /word|document/.test(t) ? '📘' : /sheet|excel|csv/.test(t) ? '📗' : /presentation|powerpoint/.test(t) ? '📙' : /audio/.test(t) ? '🎧' : /video/.test(t) ? '🎬' : '📄';
export async function usage() { try { const e = await navigator.storage.estimate(); return e; } catch (e) { return null; } }
