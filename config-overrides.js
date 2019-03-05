const path = require("path");
const {override, addBabelPlugins, babelInclude} = require("customize-cra");

module.exports = override(
  babelInclude([
    path.resolve("src"),
    path.resolve("node_modules/react-native-elements"),
    path.resolve("node_modules/react-native-ratings"),
    path.resolve("node_modules/react-native-status-bar-height"),
    path.resolve("node_modules/react-native-vector-icons"),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
//        "@babel/plugin-transform-modules-commonjs",
  ),
);
// "@babel/plugin-transform-modules-commonjs": "^7.2.0",
