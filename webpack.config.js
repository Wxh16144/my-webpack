const path = require('path')

module.exports = {
  mode: 'production',
  // default: ./src/index.js
  entry: './src/index.js',
  //  default: ./dist/main.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}