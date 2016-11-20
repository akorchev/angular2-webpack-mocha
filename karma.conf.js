var common = require('./config/karma.common');

module.exports = function (config) {
  var _config = Object.assign({}, common, {
    frameworks: ['jasmine'],
    browsers: ['PhantomJS']
  })

  config.set(_config);
};
