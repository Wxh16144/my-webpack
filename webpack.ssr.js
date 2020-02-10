const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const setMAP = () => {
  let entry = {}
  let htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index-server.js'))
  Object.keys(entryFiles).forEach(key => {
    const entryFile = entryFiles[key];
    const match = entryFile.match(/src\/(.*)\/index-server\.js/);
    const pageName = match && match[1];
    if (pageName) {
      entry[pageName] = entryFile;
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          template: path.join(__dirname, `src/${pageName}/index.html`),
          filename: `${pageName}.html`,
          chunks: [pageName],
          inject: true,
          minify: {
            html5: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false
          }
        })
      )
    }
  })
  return { entry, htmlWebpackPlugins }
};

const { entry, htmlWebpackPlugins } = setMAP()

module.exports = {
  mode: 'production', // production
  // default: ./src/index.js
  entry,
  //  default: ./dist/main.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-server.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          // 'eslint-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')({
                browsers: ['last 2 version', '>1%', 'ios 7']
              })
              ]
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          // file-loader options中设置esModule为false图片即可正常显示
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name]_[hash:8].[ext]'
          }
        }
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new CleanWebpackPlugin(),
    ...htmlWebpackPlugins,
  ],
  // const SSR = require('../dist/search-server');
  // console.log(SSR); // undefined
  // 把分离公共文件、基础库相关的配置注释掉，就好了。optimization 那些
  /*   optimization: {
      splitChunks: {
        minSize: 0,  // 引用模块的大小 0 表示只要引用
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2 // 至少引用2次
          },
          vendors: {
            test: /(react|react-dom)/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      }
    } */
}
/*
Hash: 和整改项目的构建相关，只要项目的文件哟修改，整个项目构建的 hash 就会更改
Chunkhash: 和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值
Contenthash: 根据文件内容来定义 hash ，文件内容不变，则 contenthash 不变
*/