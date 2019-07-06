const cache_Name = 'restaurant-service-worker'; // Pun intended.

// Register ServiceWorker cache array.
const filestoCache = [
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
    'img/foodie.png'
  ];

{
for (i = 1; i <= 10; i++)
  filestoCache.push(`img/${i}.jpg`, `img/extrasmall/${i}.jpg`, `img/small/${i}.jpg`, `img/medium/${i}.jpg`);
}

// Install the ServiceWorker.
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cache_Name)
        .then(function(cache) {
            console.log('Opened cache successfully');
            return cache.addAll(filestoCache);
        })
    );
});

// Prioritize offline viewing.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
