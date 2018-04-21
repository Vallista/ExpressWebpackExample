require('./check-versions')();

const webpack = require('webpack');
const isProduction = process.env.NODE_ENV;

const webpackErrorBinding = require('./error.js');
let webpackConfig = null;

if (isProduction === 'production') {
  webpackConfig = require('./webpack.prod.conf');
  webpack(webpackConfig, webpackErrorBinding);
}
