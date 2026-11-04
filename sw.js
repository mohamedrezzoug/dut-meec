// DUT MEEC – يخدم بلا أنترنت (الشبكة الأولى، ومن بعد الكاش)
const V = 'meec-v4';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'css/app.css?v=3','js/app.js?v=3','js/content/compta.js?v=3','js/content/eco.js?v=3','js/content/en.js?v=3','js/content/fr.js?v=3','js/content/math.js?v=3','js/content/metho.js?v=3','js/content/mgt.js?v=3','js/content/num.js?v=3','js/figs.js?v=3','js/gens.js?v=3','js/i18n.js?v=3','js/timetable.js?v=3','js/tools.js?v=3','js/files.js?v=3','js/extra.js?v=3','js/content/more.js?v=3','js/content/more-a.js?v=3','js/content/more-b.js?v=3','js/content/more-c.js?v=3', 'fonts/Tajawal-Medium.ttf', 'fonts/Tajawal-Bold.ttf', 'fonts/Tajawal-ExtraBold.ttf', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: false }).then(r => r || caches.match('index.html'))));
});
