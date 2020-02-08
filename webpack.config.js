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
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20480
          }
        }
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  // 默认false
  watch: true,
  // 只有 watch 为 true 时, watchOptions 才生效
  watchOptions: {
    // 默认为空 不监听的文件或者文件夹，支持正则匹配
    ignored: /node_modules/,
    // 监听到变化发生后会等待300ms再去执行, 默认300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停轮询系统置顶文件有没有变化实现的，默认每秒1000次
    poll: 1000
  }
}