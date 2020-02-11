const TerserPlugin = require('terser-webpack-Plugin');

exports.default = {
  mode: 'none',
  entry: {
    'private-test-package': './src/index',
    'private-test-package.min': './src/index',
  },
  output: {
    filename: '[name].js',
    library: 'privateTestPackage',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js/,
      }),
    ],
  },
};
