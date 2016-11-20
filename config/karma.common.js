var webpackConfig = require('./webpack.test');

module.exports = {
  basePath: '',

  files: [
    './config/karma-test-shim.js'
  ],

  preprocessors: {
    './config/karma-test-shim.js': ['webpack', 'sourcemap']
  },

  webpack: webpackConfig,

  webpackMiddleware: {
    stats: 'errors-only'
  },

  webpackServer: {
    noInfo: true,
  },

  reporters: ['mocha'],
  port: 9876,
  colors: true
};
