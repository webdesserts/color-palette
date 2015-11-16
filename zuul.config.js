module.exports = {
  ui: 'mocha-bdd',
  builder: 'zuul-builder-webpack',
  webpack: require('./webpack.config.prod.js'),
  browsers: [
    { name: 'chrome', version: 'latest' },
    { name: 'firefox', version: 'latest' },
    { name: 'safari', version: 'latest' },
    { name: 'safari', version: 'latest' },
    { name: 'ie', version: 'latest' }
  ]
}
