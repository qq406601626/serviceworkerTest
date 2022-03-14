const cacheName = 'my-site-cache-v1'
const urlsToCache = [
    './assets/img/1.png',
    './assets/js/index.js',
    './assets/style/index.css',
]
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-site-cache-v1').then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request)
        }
    }));
});
