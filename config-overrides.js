const path = require("path");
const webpack = require("webpack");
const {override, addBabelPlugins, babelInclude, removeModuleScopePlugin, useEslintRc} = require("customize-cra");

const modulesPath = path.resolve(__dirname, "node_modules");

const registerGlobals = vars => config => {
  config.plugins.push(new webpack.DefinePlugin(vars));
  return config;
};

module.exports = override(
  removeModuleScopePlugin(),

  // Don't forget to add your globals into .eslintrc
  useEslintRc(),
  registerGlobals({
    __DEV__: (process.env.NODE_ENV === "development")
  }),

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
    path.resolve(modulesPath, "expo-linear-gradient"),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
  ),
);