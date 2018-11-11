'use strict'

const path = require('path')

const config = {
  //entry: ['webpack-hot-middleware/client', resolve('src', 'javascripts', 'index.ts')],
  entry: {
    main: path.resolve(__dirname, 'src', 'javascripts', 'index.tsx'),
  },

  devtool: 'inline-cheap-module-source-map',
  // plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
