const express = require('express');
const path = require('path');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
app.use(helmet());
app.use(cors());
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);