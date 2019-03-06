const path = require("path");
const webpack = require("webpack");
const {override, addBabelPlugins, babelInclude, removeModuleScopePlugin} = require("customize-cra");

const modulesPath = path.resolve(__dirname, "node_modules");

const add__DEV__ = config => {
  config.plugins.push(new webpack.DefinePlugin({
    __DEV__: (process.env.NODE_ENV === "development")
  }));
  return config;
};

module.exports = override(
  add__DEV__,
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve("src"),
    path.resolve(modulesPath, "react-native-elements"),
    path.resolve(modulesPath, "react-native-ratings"),
    path.resolve(modulesPath, "react-native-status-bar-height"),
    path.resolve(modulesPath, "react-native-vector-icons"),
    path.resolve(modulesPath, "react-native-safe-area-view"),
    path.resolve(modulesPath, "react-navigation"),
    path.resolve(modulesPath, "react-native-tab-view"),
    path.resolve(modulesPath, "react-native-touchable-scale"),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
  ),
);