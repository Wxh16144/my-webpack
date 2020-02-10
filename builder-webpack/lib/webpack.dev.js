
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')


const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only'
  },
  // see: https://www.webpackjs.com/configuration/devtool/
  devtool: "cheap-source-map"
}

module.exports = merge(baseConfig, devConfig)