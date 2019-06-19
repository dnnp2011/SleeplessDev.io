const workbox = require('workbox-build');

const swDest = 'build/sw.js';
const swSrc = 'src-sw.js';

console.log('Running Workbox-Build...');

workbox.generateSW({
          globDirectory: 'build/',
          globPatterns: [
            '**/*.js',
            '**/*.html',
            '**/*.css',
            '**/*.json',
            '**/*.ico',
            '**/*.svg',
            '**/*.png',
            '**/*.jpg',
            '**/*.jpeg',
            '**/*.ogv',
            '**/*.webm',
            '**/*.ttf',
            '**/*.woff',
            '**/*.woff2',
            '**/*.eot',
            '**/*.mp4'
          ],
          globIgnores: [ 'node_modules/**/*' ],
          globStrict: true,
          maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
          swDest,
          importWorkboxFrom: 'cdn',
          skipWaiting: true,
          clientsClaim: true,
          runtimeCaching: [
            {
              urlPattern: new RegExp('^.*\.(?:png|jpg|svg|jpeg|webm|ogv|mp4)$'),
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-v1',
                expiration: {
                  maxAgeSeconds: (60 * 60 * 24 * 7)
                },
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: ({ event }) => event.request.mode === 'navigate',
              handler: 'NetworkOnly'
            }, {
              urlPattern: new RegExp('^(?:https:\/\/backend\.sleeplessdev\.io)\/?.*', 'i'),
              handler: 'networkFirst',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: new RegExp('^(?:https:\/\/sleeplessdev-io\.firebaseio\.com)\/?.*', 'i'),
              handler: 'networkFirst',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: new RegExp('^(?:https:\/\/resume\.creddle\.io)\/?.*', 'i'),
              handler: 'StaleWhileRevalidate',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: new RegExp('^(https:\/\/fonts.(?:googleapis|gstatic).com)\/?.*', 'i'),
              handler: 'CacheFirst',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: new RegExp('^(https:\/\/storage.(?:googleapis|gstatic).com)\/?.*', 'i'),
              handler: 'CacheFirst',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: new RegExp('^(?:https:\/\/netdna\.bootstrapcdn\.com)\/?.*', 'i'),
              handler: 'CacheFirst',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }, {
              urlPattern: new RegExp('^(?:https:\/\/code\.jquery\.com)\/?.*', 'i'),
              handler: 'CacheFirst',
              options: {
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }
          ],
          navigateFallback: './index.html',
          navigateFallbackBlacklist: [ /^\/(?:build|static|assets|images|css|js|media)/ ],
          importScripts: [ 'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js' ],
          directoryIndex: 'build',
          offlineGoogleAnalytics: true,
          cleanupOutdatedCaches: true
        })
          .then(({ count, size }) => {
            console.log(`generateSW --> Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);

            workbox.injectManifest({
              globDirectory: 'build/',
              globPatterns: [
                '**/*.js',
                '**/*.html',
                '**/*.css',
                '**/*.json',
                '**/*.ico',
                '**/*.svg',
                '**/*.png',
                '**/*.jpg',
                '**/*.jpeg',
                '**/*.ogv',
                '**/*.webm',
                '**/*.ttf',
                '**/*.woff',
                '**/*.woff2',
                '**/*.eot',
                '**/*.mp4'
              ],
              globIgnores: [ 'node_modules/**/*' ],
              globStrict: true,
              maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
              swDest,
              swSrc
            })
              .then(({ count, size }) => {
                console.log(`injectManifest --> Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
              })
              .catch(err => console.log('injectManifest --> ', err));
          })
          .catch(err => console.log('generateSW --> ', err));
//-----------------------------------------------------------------------------
/*const workbox = require('workbox-build');

 const swDest = 'build/sw.js';
 const swSrc = 'src-sw.js';

 console.log('Running Workbox-Build...');

 // TODO: Try to resolve the "bad-precaching-response: The precaching request failed with an HTTP status of 404" error
 // TODO: If all else fails, revert to the manual build process and migrate new options to workbox-config.js

 console.log('Starting doBuildSW()');

 workbox.generateSW({
 swDest,
 importWorkboxFrom: 'local',
 globIgnores: [ 'node_modules/!**!/!*' ],
 globDirectory: '.',
 globPatterns: [
 '**!/!*.js',
 '**!/!*.html',
 '**!/!*.css',
 '**!/!*.json',
 '**!/!*.ico',
 '**!/!*.svg',
 '**!/!*.png',
 '**!/!*.jpg',
 '**!/!*.jpeg',
 '**!/!*.ogv',
 '**!/!*.webm',
 '**!/!*.ttf',
 '**!/!*.woff',
 '**!/!*.woff2',
 '**!/!*.eot',
 '**!/!*.mp4'
 ],
 cacheId: 'sleeplessdev',
 offlineGoogleAnalytics: true,
 cleanupOutdatedCaches: true,
 maximumFileSizeToCacheInBytes: (4 * 1024 * 1024),
 runtimeCaching: [
 {
 urlPattern: /^.*\.(?:png|jpg|svg|jpeg|webm|ogv|mp4)$/,
 handler: 'CacheFirst',
 options: {
 cacheName: 'images-v1',
 expiration: {
 maxAgeSeconds: 60 * 60 * 24 * 7
 },
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/backend\.sleeplessdev\.io)\/?.*', 'i'),
 handler: 'networkFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/sleeplessdev-io\.firebaseio\.com)\/?.*', 'i'),
 handler: 'networkFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/resume\.creddle\.io)\/?.*', 'i'),
 handler: 'StaleWhileRevalidate',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(https:\/\/fonts.(?:googleapis|gstatic).com)\/?.*', 'i'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/netdna\.bootstrapcdn\.com)\/?.*', 'i'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/code\.jquery\.com)\/?.*', 'i'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }
 ]
 });*/
/*.then(({ count, size }) => {
 console.log(`generateSW --> Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
 console.log('Starting doInjectManifest');
 workbox.injectManifest({
 swSrc,
 swDest,
 globDirectory: '.',
 globIgnores: [ '**!/ignored.html', 'node_modules/!**!/!*' ],
 globPatterns: [
 '**!/!*.js',
 '**!/!*.html',
 '**!/!*.css',
 '**!/!*.json',
 '**!/!*.ico',
 '**!/!*.svg',
 '**!/!*.png',
 '**!/!*.jpg',
 '**!/!*.jpeg',
 '**!/!*.ogv',
 '**!/!*.webm',
 '**!/!*.ttf',
 '**!/!*.woff',
 '**!/!*.woff2',
 '**!/!*.eot',
 '**!/!*.mp4'
 ]
 })
 .then(({ count, size }) => {
 console.log(`injectManifest --> Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
 console.log('Completed doInjectManifest');
 }
 )
 .catch(err => console.log('Workbox-Build ---> Error injecting precache manifest: ', err));
 })
 .catch(err => console.log('Workbox-Build --> Error generating Service Worker: ', err));*/



/*{
 urlPattern: new RegExp('^(?:https:\/\/backend\.sleeplessdev\.io)\/?.*', 'i'),
 handler: 'networkFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/sleeplessdev-io\.firebaseio\.com)\/?.*', 'i'),
 handler: 'networkFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/resume\.creddle\.io)\/?.*', 'i'),
 handler: 'StaleWhileRevalidate',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(https:\/\/fonts.(?:googleapis|gstatic).com)\/?.*', 'i'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/netdna\.bootstrapcdn\.com)\/?.*', 'i'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/code\.jquery\.com)\/?.*', 'i'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }*/

/*
 runtimeCaching: [
 {
 urlPattern: /^.*(?:(?=.*blog)|(\.(?:png|jpg|jpeg|svg|webm|mp4|ogv))+$)(?!.*\.[^\/.]?$).*!/igm,
 handler: 'CacheFirst',
 options: {
 cacheName: 'images',
 expiration: {
 maxEntries: 5,
 maxAgeSeconds: 60
 },
 backgroundSync: {
 name: 'image-sync',
 options: {
 maxRetentionTime: 60 * 60
 },
 },
 cacheableResponse: {
 statuses: [ 0, 200 ],
 headers: { 'x-test': 'true' }
 },
 broadcastUpdate: {
 channelName: 'image-update-channel'
 },
 plugins: [ { cacheDidUpdate() {} } ],
 // matchOptions and fetchOptions are used to configure the handler.
 fetchOptions: {
 mode: 'no-cors'
 },
 matchOptions: {
 ignoreSearch: true
 },
 },
 }, {
 urlPattern: ({ event }) => event.request.mode === 'navigate',
 handler: 'NetworkOnly'
 }, {
 urlPattern: new RegExp('^(?:https:\/\/backend\.sleeplessdev\.io)\/?.*'),
 handler: 'NetworkFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/sleeplessdev-io\.firebaseio\.com)\/?.*'),
 handler: 'NetworkFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/resume\.creddle\.io)\/?.*'),
 handler: 'StaleWhileRevalidate',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(https:\/\/fonts.(?:googleapis|gstatic).com)\/?.*'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/netdna\.bootstrapcdn\.com)\/?.*'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }, {
 urlPattern: new RegExp('^(?:https:\/\/code\.jquery\.com)\/?.*'),
 handler: 'CacheFirst',
 options: {
 cacheableResponse: {
 statuses: [ 0, 200 ]
 }
 }
 }
 ]
 */