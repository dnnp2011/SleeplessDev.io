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
  swSrc: 'src-sw.js',
};
