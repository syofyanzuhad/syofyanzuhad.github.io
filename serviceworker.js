var staticCacheName = "pwa";
const cacheVersion = 'v1-pwa-dasar';
var filesToCache = [
   "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
   "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
   "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js",
   "https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i&amp;subset=arabic",
   "https://fonts.googleapis.com/css?family=Lato:400,400italic,700|Sansita+One",
   "https://image.flaticon.com/icons/png/512/3073/3073665.png",
   "https://www.flaticon.com/premium-icon/icons/svg/3031/3031173.svg",
   "/asset/dzikirpagi.json",
   "/asset/dzikirpetang.json",
   "/dzikir.html"
];

self.addEventListener('install', function (event) {
   event.waitUntil(
      caches.open(cacheVersion)
         .then(function (cache) {
            return cache.addAll(filesToCache)
         })
   )
});

self.addEventListener('fetch', function (event) {
   event.respondWith(
      caches.match(event.request)
         .then(function (res) {
            if (res) return res;

            return fetch(event.request);
         })
   );
});    