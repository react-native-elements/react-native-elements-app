const path = require("path");
const webpack = require("webpack");
const {override, addBabelPlugins, babelInclude, removeModuleScopePlugin, addWebpackAlias} = require("customize-cra");

const modulesPath = path.resolve(__dirname, "node_modules");

const registerGlobals = vars => config => {
  if(!Array.isArray(config.plugins)) config.plugins = [];
  config.plugins.push(new webpack.DefinePlugin(vars));

  const eslintRuleOptions = config.module.rules.filter(
    r => r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
  )[0].use[0].options;
  if(!Array.isArray(eslintRuleOptions.globals)) eslintRuleOptions.globals = [];
  eslintRuleOptions.globals = [...eslintRuleOptions.globals, ...Object.keys(vars)];

  return config;
};

module.exports = override(
  removeModuleScopePlugin(),
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
    path.resolve(modulesPath, "@react-navigation", "native"),
    path.resolve(modulesPath, "react-native-gesture-handler-web"),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
  ),
  addWebpackAlias({
    "react-native-gesture-handler": "react-native-gesture-handler-web",
  })
);