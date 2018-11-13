'use strict'

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  output: {    
    filename: '[name].[contenthash].js',
  },

  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true
    })]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};

module.exports = config;
