const withStylus = require('@zeit/next-stylus');
const withPlugins = require('next-compose-plugins');
const withSize = require('next-size');
const withCSS = require('@zeit/next-css');

const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

const cssLoaderOptions = {
  importLoaders: 1,
  localIdentName: "[local]__[hash:base64:5]",
};

const nextPlugins = [
  [withStylus, { cssModules: true, cssLoaderOptions }],
  [withCSS, { cssModules: false }],
  [withSize]
];

const nextConfig = {
  webpack: function (config, options) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }
    config.resolve.alias = {
      '@root': path.resolve(__dirname),
      '@components': path.resolve(__dirname, './source/components'),
      '@framework': path.resolve(__dirname, './source/framework'),
      '@services': path.resolve(__dirname, './source/services'),
      ...config.resolve.alias
    };

    return config
  }
};

module.exports = withPlugins(nextPlugins, nextConfig);
