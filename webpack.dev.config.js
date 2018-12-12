'use strict'

const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  entry: {
    main: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'src', 'client', 'javascripts', 'index.tsx')
    ],
  },

  devtool: 'inline-cheap-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;
