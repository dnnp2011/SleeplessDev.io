importScripts('./workbox/workbox-v4.3.1/workbox-sw.js');

console.log('Custom Manifest Injected');

workbox.precaching.precacheAndRoute([]);