// Service Worker for GGT Event Gallery
const CACHE_NAME = 'ggt-gallery-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/images/header-logo.png',
    '/images/header-logo2.png',
    '/images/gallery-1.png',
    '/images/gallery-2.png',
    '/images/gallery-3.png',
    '/images/gallery-4.png',
    '/images/gallery-5.png',
    '/images/gallery-6.png',
    '/images/gallery-7.png',
    '/images/gallery-8.png',
    '/images/gallery-9.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});