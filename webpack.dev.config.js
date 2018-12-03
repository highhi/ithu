'use strict'

const webpack = require('webpack')

const config = {
  devtool: 'inline-cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
