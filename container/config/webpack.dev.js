const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
};

module.exports = merge(commonConfig, devConfig);