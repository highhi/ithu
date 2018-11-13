const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC = path.resolve(__dirname, 'src', 'javascripts')
const DIST = path.resolve(__dirname, 'dist', 'javascripts')

const isProd = process.env.NODE_ENV === 'production'
const config = isProd ? require('./webpack.prod.config') : require('./webpack.dev.config')

// const babelOptions = {
//   presets: [
//     '@babel/preset-react',
//     ['@babel/preset-env', {
//       modules: false,
//       targets: { browsers: [
//         'last 3 ChromeAndroid versions',
//         'iOS >= 9',
//         'samsung >= 7'
//       ]},
//     }],
//   ],
//   plugins: [
//     '@babel/proposal-class-properties',
//     '@babel/proposal-object-rest-spread',
//   ]
// }

const common = {
  mode: isProd ? 'production' : 'development',

  entry: {
    main: path.resolve(__dirname, 'src', 'javascripts', 'index.tsx'),
  },

  output: {
    path: path.resolve(__dirname, DIST),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader'
        }],
      }
    ]
  },

  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
          name: 'vendor'
        },
      }
    }
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve('src', 'stylesheets'),
      to: path.resolve('dist', 'stylesheets')
    }]),
    new HtmlWebpackPlugin({
      title: 'iThu',
      filename: '../index.html',
      template: path.resolve('src', 'index.html'),
      inject: false
    })
  ]
}

module.exports = merge(common, config);
