const CACHE_NAME='senat-narod-piter-hybrid-v1';
const FILES=["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./assets/slide01.jpg", "./assets/slide02.jpg", "./assets/slide03.jpg", "./assets/slide04.jpg", "./assets/slide05.jpg", "./assets/slide06.jpg", "./assets/slide07.jpg", "./assets/slide08.jpg", "./assets/slide09.jpg", "./assets/slide10.jpg", "./assets/slide11.jpg", "./assets/slide12.jpg", "./assets/slide13.jpg", "./assets/slide14.jpg", "./assets/slide15.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
