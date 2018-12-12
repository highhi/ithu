const path = require('path')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')

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

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/public/'
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader'
        }],
      },
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new Dotenv(),
  ]
}

module.exports = merge(common, config);
