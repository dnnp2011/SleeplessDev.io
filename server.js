const express = require('express');
const path = require('path');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const helmet = require('helmet');
const cors = require('cors');
const Utils = require('./src/helpers/Util');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
app.use(helmet());
app.use(cors());
app.use(redirectToHTTPS([ /localhost:(\d{4})/ ], [], 301));

// Disable the X-Powered-By Header
app.disable('x-powered-by');
// Enable some built-in security headers
app.use(function (req, res, next) {
  res.header('X-XSS-Protection', '1; mode=block');
  res.header('X-Frame-Options', 'deny');
  res.header('X-Content-Type-Options', 'nosniff');
  next();
});

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

const port = process.env.PORT || Math.floor((Math.random() * (63000 - 5000 + 1)) + 5000);
app.listen(port);

console.log(`App is listening on port ${port}`);