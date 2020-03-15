module.exports = function (api) {
  api.cache(true);

  const presets = [
    [require("next/babel"), {
      "transform-runtime": {
        "corejs": false
      }
    }],
  ];

  const plugins = [
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ];

  return {
    presets,
    plugins
  };
};
