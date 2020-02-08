const path = require('path')

module.exports = {
  mode: 'production',
  // default: ./src/index.js
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  //  default: ./dist/main.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
}