'use strict'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function js(filename) {
  return `javascripts/${filename}`
}

const config = {
  entry: {
    [js('main')]: path.resolve(__dirname, 'src', 'client', 'javascripts', 'index.tsx'),
  },

  output: {    
    filename: '[name].[contenthash].js',
  },

  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true
    })],
    runtimeChunk: {
      name: js('runtime')
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
          name: js('vendor')
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: js('react'),
          priority: 1,
          chunks: 'all',
        },
        firebase: {
          test: /[\\/]node_modules[\\/](@firebase)[\\/]/,
          name: js('firebase'),
          priority: 1,
          chunks: 'all',
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, 'dist', 'manifest.json')
    }),
  ]
};

module.exports = config;
