const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
});
