module.exports = function(api) {
  api.cache(true);

  let presets = ['babel-preset-expo'];

  let plugins = ['@babel/plugin-proposal-class-properties'];

  if (process.env.platform === 'web')
    presets.push(["@babel/preset-env", { useBuiltIns: "usage", },]);

  return { presets, plugins };
};
