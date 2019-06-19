const express = require('express');
const path = require('path');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const helmet = require('helmet');
const cors = require('cors');
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

        const serverOptions = {
          dotfiles: 'ignore',
          index: false,
          maxAge: '2h',
          redirect: true,
          setHeaders(res, path, stat) {
            res.set('x-timestamp', dayjs());
            res.set('x-content-type-options', 'nosniff');
          }
        };

        const app = express(serverOptions);

        // Serve the static files from the React app
        app.use(express.static(path.join(__dirname, 'build')));
        // app.use(helmet());
        app.use(cors());
        app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

        // Disable the X-Powered-By Header
        app.disable('x-powered-by');
        // Enable some built-in security headers
        app.use(function(req, res, next) {
          res.header('X-XSS-Protection', '1; mode=block');
          res.header('X-Frame-Options', 'deny');
          res.header('X-Content-Type-Options', 'nosniff');
          next();
        });

        if (process.env.NODE_ENV === 'production') {
          app.use((req, res, next) => {
            if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}${req.url}`);
            else next();
          });
        }

        // Handles any requests that don't match the ones above

        app.get('*', (req, res) => {
          res.sendFile(path.join(`${__dirname}/build/index.html`));
        });

        /* TODO:
         1. current page does not respond with a 200 when offline (PWA)
         2. start_url does not respond with a 200 when offline (PWA)
         3. Does not register a service worker that controls page and start_url (PWA)
         4. Web app manifest does not meet installability req. Does not have PNG icon of at least 192px (PWA)
         5. Not configured for splash screen. Does not have PNG icon of at least 512px. (PWA)
         6. Does not have a valid apple-touch-icon (PWA)
         7. Robots.txt file may be malformed (SEO)
         8. Document does not have a meta description (SEO)
         9. Does not use HTTP/2 for all resources (BP)
         10. Buttons do not have accessible names (Acc)

         */
        // app.enable('trust proxy');
        // app.listen(port)

        /**
         * Get port from environment and store in Express.
         */

        const port = normalizePort(process.env.PORT || Math.floor((Math.random() * (63000 - 5000 + 1)) + 5000));
        app.set('port', port);

        /**
         * Normalize a port into a number, string, or false.
         */

        function normalizePort(val) {
          const port = parseInt(val, 10);

          if (isNaN(port)) {
            // named pipe
            return val;
          }

          if (port >= 0) {
            // port number
            return port;
          }

          return false;
        }

        /**
         * Event listener for HTTP server "error" event.
         */

        function onError(error) {
          if (error.syscall !== 'listen') {
            throw error;
          }

          const bind = typeof port === 'string'
            ? `Pipe ${  port}`
            : `Port ${  port}`;

          // handle specific listen errors with friendly messages
          switch (error.code) {
            case 'EACCES':
              console.error(`${bind  } requires elevated privileges`);
              process.exit(1);
              break;
            case 'EADDRINUSE':
              console.error(`${bind  } is already in use`);
              process.exit(1);
              break;
            default:
              throw error;
          }
        }

        /**
         * Event listener for HTTP server "listening" event.
         */

        function onListening() {
          const addr = server.address();
          const bind = typeof addr === 'string'
            ? `pipe ${  addr}`
            : `port ${  addr.port}`;
          debug(`Listening on ${  bind}`);
          console.log(`Listening on ${bind}`);
        }

        app.listen(port);
        console.log(`App is listening on port ${port}`);
      })
      .catch(err => console.log('injectManifest --> ', err));
  })
  .catch(err => console.log('generateSW --> ', err));
