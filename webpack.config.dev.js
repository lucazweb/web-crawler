const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: './public'
    },
    devMiddleware: {
      writeToDisk: true
    },
    liveReload: true,
    historyApiFallback: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /\node_modules/
      }
    ]
  }
});
