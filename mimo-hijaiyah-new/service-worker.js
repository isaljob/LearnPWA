const CACHE_NAME = "mimo-appv3";
var urlsToCache = [
    "/",
    "/index.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/js/materialize.min.js",
    "/js/jquery-3.4.1.min.js",
    "/js/main.js",
    "/img/alif.png",
    "/img/ba.png",
    "/img/ta.png",
    "/img/tsa.png",
    "/img/jim.png",
    "/img/ha.png",
    "/img/kho.png",
    "/img/dal.png",
    "/img/dzal.png",
    "/img/ra.png",
    "/img/zai.png",
    "/img/sin.png",
    "/audio/Huruf Tanda Baca Fathah/fatah_a.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_ba.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_ta.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_tsa.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_ja.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_ha.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_kho.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_da.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_dza.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_ro.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_za.mp3",
    "/audio/Huruf Tanda Baca Fathah/fatah_sa.mp3",
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
        .match(event.request, {
            cacheName: CACHE_NAME
        })
        .then(function (response) {

            if (response) {
                console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                return response;
            }

            console.log(
                "ServiceWorker: Memuat aset dari server: ",
                event.request.url
            );
            return fetch(event.request);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});