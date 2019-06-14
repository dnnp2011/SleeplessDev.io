// importScripts('/workbox-v4.3.1/workbox-sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

console.log('Injecting Custom Manifest...');

workbox.setConfig({ debug: true });
workbox.core.setCacheNameDetails({ prefix: 'sleeplessdev' });
workbox.precaching.precacheAndRoute([]);


// !! googleapis and gstatic fonts
workbox.routing.registerRoute(
  new RegExp('^(https:\/\/fonts.(?:googleapis|gstatic).com)\/?.*', 'ig'),
  new workbox.strategies.CacheFirst({
    cacheName: 'google-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
);

// !! images
// workbox.routing.registerRoute(
//   new RegExp('^.*(?:png|jpg|jpeg|svg|webm|mp4|ogv)+$(?!.*\.[^\/.]?$).*', 'ig'),
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [ 0, 200 ]
//       }),
//       new workbox.expiration.Plugin({
//         maxAgeSeconds: 60 * 60 * 24 * 7 // Keep for one week
//       })
//     ]
//   })
// );

// !! backend.sleeplessdev.io
workbox.routing.registerRoute(
  new RegExp('^(?:https:\/\/backend\.sleeplessdev\.io)\/?.*', 'ig'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'backend-cache-v1',
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 5, // Five minutes
        maxEntries: 10
      })
    ]
  })
);

// !! backend.sleeplessdev.io
workbox.routing.registerRoute(
  new RegExp('^(?:https:\/\/sleeplessdev-backend\.herokuapp\.com)\/?.*', 'ig'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'backend-cache-v2',
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 5, // Five minutes
        maxEntries: 10
      })
    ]
  })
);

// !! firebase sleeplessdev-io
workbox.routing.registerRoute(
  new RegExp('^(?:https:\/\/sleeplessdev-io.firebaseio.com)\/*.*', 'ig'),
  // https://sleeplessdev-io.firebaseio.com/.lp?start=t&ser=60652980&cb=8&v=5&ls=GSMrBPfHCQmhcNyhuFhksp8bp7h3oz8b
  new workbox.strategies.NetworkFirst({
    cacheName: 'firebase-cache-v1',
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      })
    ]
  })
);

// !! firebase
workbox.routing.registerRoute(
  new RegExp('^(?:https:(.*.)?firebaseio\.com)?.*', 'ig'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'firebase-cache-v2',
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      })
    ]
  })
);


// !! creddle resume
workbox.routing.registerRoute(
  new RegExp('^(https:\/\/resume\.creddle\.io)?.*', 'ig'),
  // https://resume.creddle.io/stylesheets/bootstrap.css
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'creddle-v1',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Days
      })
    ]
  })
);

// !! bootstrap cdn
workbox.routing.registerRoute(
  new RegExp('^(?:https:\/\/netdna\.bootstrapcdn\.com)?.*', 'ig'),
  new workbox.strategies.CacheFirst({
    cacheName: 'bootstrap-cdn-v1',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Days
      })
    ]
  })
);

// !! jquery cdn
workbox.routing.registerRoute(
  new RegExp('^(?:https:\/\/code\.jquery\.com)\/?.*', 'ig'),
  new workbox.strategies.CacheFirst({
    cacheName: 'jquery-cdn-v1',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [ 0, 200 ]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Days
      })
    ]
  })
);

// !! audio
workbox.routing.registerRoute(
  // Custom `matchCallback` function
  ({ event }) => event.request.destination === 'audio',
  new workbox.strategies.CacheFirst({
    cacheName: 'audio-v1',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

/*workbox.routing.registerRoute(
 new RegExp('REGEXP', 'i'),
 new new workbox.strategies.STRATEGY({
 cacheName: 'NAME',
 plugins: [
 new workbox.cacheableResponse.Plugin({
 statuses: [ 0, 200 ]
 }),
 new workbox.expiration.Plugin({
 maxAgeSeconds: AGE,
 maxEntries: MAX
 })
 ]
 })
 );*/

/*
workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^.*\.(?:png|jpg|svg|jpeg|webm|ogv|mp4)$/, new new workbox.strategies.CacheFirst({
  cacheName: 'images-v1',
  plugins: [
    new workbox.expiration.Plugin({
      maxAgeSeconds: 604800,
      purgeOnQuotaError: false
    }),
    new workbox.backgroundSync.Plugin('image-sync-v1', { maxRetentionTime: 3600 }),
    new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }),
    new workbox.broadcastUpdate.Plugin({ channelName: 'image-sync-channel-v1' })
  ]
}), 'GET');

workbox.googleAnalytics.initialize({});*/
