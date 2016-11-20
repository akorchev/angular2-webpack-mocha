var common = require('./config/karma.common');

module.exports = function (config) {
  var _config = Object.assign({}, common, {
    frameworks: ['mocha', 'sinon'],
    logLevel: config.LOG_INFO,
  })

  config.set(_config);
};
