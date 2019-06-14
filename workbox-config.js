module.exports = {
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
    '**/*.mp4',
  ],
  globIgnores: [ 'node_modules/**/*' ],
  globStrict: true,
  maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
  swDest: 'build/sw.js',
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
      handler: 'NetworkOnly',
    }
  ],
  navigateFallback: './index.html',
  navigateFallbackBlacklist: [ /^\/(?:build|static|assets|images|css|js|media)/ ],
  importScripts: [ 'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js' ],
  directoryIndex: 'build',
  offlineGoogleAnalytics: true,
  cleanupOutdatedCaches: true
};
