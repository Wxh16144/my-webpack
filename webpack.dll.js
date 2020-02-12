const path = require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    library: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'build/library'),
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'build/library/[name].json'),
    }),
  ],
};

module.exports = config;
