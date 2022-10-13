// (A) FILES TO CACHE
const cName = "demo-pwa",
cFiles = [
  // (A1) POS "SYSTEM"
  "buy.html",
  "css/JS-POS.css",
  "JS-POS.js",

  // (A2) IMAGES
  "images/ticket.jpg",
  "images/bilecik.jpg",
  "images/disco.jpg",
  "images/festiwal.jpg",
  "images/piosenka.jpg",
  "images/tiketik.jpg",
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );
});
