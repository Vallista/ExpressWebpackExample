const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const projectDir = path.resolve(__dirname, '../project');

module.exports = {
  entry: path.resolve(projectDir, 'src'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack Test'
    }),
  ],
  stats: {
    // Nice colored output
    colors: true,
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};