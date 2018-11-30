const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const ManifestPlugin = require('webpack-manifest-plugin')
const Dotenv = require('dotenv-webpack')

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

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

function js(filename) {
  return `javascripts/${filename}`
}

const common = {
  mode: isProd ? 'production' : 'development',

  entry: {
    [js('main')]: path.resolve(SRC, 'javascripts', 'index.tsx'),
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
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: js('react'),
          priority: 1,
          chunks: 'all',
        }
      }
    }
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(SRC, 'stylesheets', 'style.css'),
      to: path.resolve(DIST, 'stylesheets', '[name].css'),
      force: true,
    }]),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, 'server', 'manifest.json')
    }),
    new Dotenv()
  ]
}

module.exports = merge(common, config);
