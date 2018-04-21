const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf.js');

const webpackMergedDev = webpackMerge(webpackBase, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
  },
});

module.exports = webpackMergedDev;