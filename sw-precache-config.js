module.exports = {
  staticFileGlobs: [ 'build/static/css/**.css', 'build/static/js/!**.js' ],
  swFilePath: './build/sw-cached-pages.js',
  stripPrefix: 'build/',
  handleFetch: true,
  runtimeCaching: [
    {
      urlPattern: /\*/,
      handler: 'networkFirst',
      options: {
        cache: {
          name: 'v1',
          maxEntries: 50,
          maxAgeSeconds: 720
        }
      }
    }
  ]
};
