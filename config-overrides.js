const path = require("path");
const {override, addBabelPlugins, babelInclude} = require("customize-cra");

const modulesPath = path.resolve(__dirname, "node_modules");

module.exports = override(
  babelInclude([
    path.resolve("src"),
    path.resolve(modulesPath, "react-native-elements"),
    path.resolve(modulesPath, "react-native-ratings"),
    path.resolve(modulesPath, "react-native-status-bar-height"),
    path.resolve(modulesPath, "react-native-vector-icons"),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
//    "@babel/plugin-proposal-export-default-from",
//    "@babel/plugin-transform-modules-commonjs",
  ),
);
// "@babel/plugin-proposal-export-default-from": "^7.2.0",
// "@babel/plugin-transform-modules-commonjs": "^7.2.0",
