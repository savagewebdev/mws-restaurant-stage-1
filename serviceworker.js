const cacheName = 'restaurant-service-worker'; // Pun intended.

const urlsToCache = [
    '/',
    'css/extrasmall.css',
    'css/small.css',
    'css/medium.css',
    'css/large.css',
    'css/styles.css',
    'jquery-3.3.1.min.js',
    'data/restaurants.json',
    'js/custom.js',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'img/foodie.png',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/extrasmall/1.jpg',
    'img/extrasmall/2.jpg',
    'img/extrasmall/3.jpg',
    'img/extrasmall/4.jpg',
    'img/extrasmall/5.jpg',
    'img/extrasmall/6.jpg',
    'img/extrasmall/7.jpg',
    'img/extrasmall/8.jpg',
    'img/extrasmall/9.jpg',
    'img/extrasmall/10.jpg',
    'img/small/1.jpg',
    'img/small/2.jpg',
    'img/small/3.jpg',
    'img/small/4.jpg',
    'img/small/5.jpg',
    'img/small/6.jpg',
    'img/small/7.jpg',
    'img/small/8.jpg',
    'img/small/9.jpg',
    'img/small/10.jpg',
    'img/medium/1.jpg',
    'img/medium/2.jpg',
    'img/medium/3.jpg',
    'img/medium/4.jpg',
    'img/medium/5.jpg',
    'img/medium/6.jpg',
    'img/medium/7.jpg',
    'img/medium/8.jpg',
    'img/medium/9.jpg',
    'img/medium/10.jpg',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch the contents and reply with cache
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
