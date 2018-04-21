
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf.js');

const webpackMergedProd = webpackMerge(webpackBase, {

});

module.exports = webpackMergedProd;