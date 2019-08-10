const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(Object.assign(env, { polyfill: true }), argv);
  // Customize the config before returning it.
  return config;
};
