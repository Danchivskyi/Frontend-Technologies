// JS file dla pliku buy.html, ktory odpowiada za tworzenie elementow
// Files to cache
const cName = "demo-pwa",
cFiles = [
  "buy.html",
  "css/JS-POS.css",
  "JS-POS.js",

  // Add images 
  "images/ticket.jpg",
  "images/bilecik.jpg",
  "images/disco.jpg",
  "images/festiwal.jpg",
  "images/piosenka.jpg",
  "images/tiketik.jpg",
];

// Create/Install cache
self.addEventListener("install", (evt) => { // wywołanie funkcji w momencie, gdy zostanie wykryte jakies zdarzenie
  evt.waitUntil( // informowanie przegladarki, ze praca jest wykonywana do czasu spelnienia obietnicy i nie powinna przerywac service worker
    caches.open(cName) // otwieranie cache
    .then((cache) => { return cache.addAll(cFiles); }) // zwracanie wszystkich cache 
    .catch((err) => { console.error(err) }) // wylapywanie bledow
  );
});

// zaladowanie z pamieci podrecznej (cache first), powrot do sieci jesli nie znaleziono  
self.addEventListener("fetch", (evt) => { // wywołanie funkcji w momencie, gdy zostanie wykryte jakies zdarzenie
  evt.respondWith( // metoda respondWith zapobiega evt domyslnej obsludze pobierania przegladarki i pozwala na zlozenie obietnicy response do siebie 
    caches.match(evt.request) // przeszukiwanie tekstu pod katem dopasowania do wyrazenia regularnego i zwraca dopasowania w postaci tablicy 
    .then((res) => { return res || fetch(evt.request); }) // proces pobierania zasobu z sieci, zwracanie 
  );
});
