'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new extractTextPlugin('[name]-[hash].css'),
    new htmlPlugin({
      title: 'GitHub App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'semistandard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: ['style', 'css']
    }]
  }
});
