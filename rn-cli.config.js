const metroBundler = require('metro-bundler');

module.exports = {
  getBlacklistRE: function () {
    return metroBundler.createBlacklist([/node_modules\/react-native-elements\/node_modules\/.*/]);
  }
};