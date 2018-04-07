const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const config = require('./../config');

const resolve = (dir) => {
  return path.resolve(__dirname, '..', dir);
};

const createLintingRule = () => ({
  test: /\.js$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: isProduction ? config.prod.emitWarning : !config.dev.emitWarning
  },
});

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/App.js'
  },
  output: {
    path: isProduction ? config.prod.assetsPublicPath : !config.dev.assetsPublicPath
  },
};