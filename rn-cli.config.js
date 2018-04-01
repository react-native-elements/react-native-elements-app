const blacklist = require('metro/src/blacklist');

module.exports = {
  getBlacklistRE: function () {
    return blacklist([/node_modules\/react-native-elements\/node_modules\/.*/]);
  }
};