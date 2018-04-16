require('./check-versions')();

const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

let webpackConfig = isProduction ? require('./webpack.prod.conf') : require('./webpack.dev.conf');
const webpackErrorBinding = require('./error.js');

webpack(webpackConfig, webpackErrorBinding);