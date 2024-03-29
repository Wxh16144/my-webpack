const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

const setMAP = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));
  Object.keys(entryFiles).forEach((key) => {
    const entryFile = entryFiles[key];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
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
          removeComments: false,
        },
      }),
    );
  });
  return { entry, htmlWebpackPlugins };
};

const { entry, htmlWebpackPlugins } = setMAP();

module.exports = {
  mode: 'production', // production
  // default: ./src/index.js
  entry,
  //  default: ./dist/main.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].bundle.js',
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/umd/react-dom.production.min.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 3,
            },
          },
          'babel-loader?cacheDirectory=true',
          // 'eslint-loader'
        ],
        include: path.resolve('src'),
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
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
                browsers: ['last 2 version', '>1%', 'ios 7'],
              }),
              ],
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]',
          },
        },
        // {
        //   loader: 'image-webpack-loader',
        //   options: {
        //     mozjpeg: {
        //       progressive: true,
        //       quality: 65,
        //     },
        //     // optipng.enabled: false will disable optipng
        //     optipng: {
        //       enabled: false,
        //     },
        //     pngquant: {
        //       quality: [0.65, 0.90],
        //       speed: 4,
        //     },
        //     gifsicle: {
        //       interlaced: false,
        //     },
        //     // the webp option will enable WEBP
        //     webp: {
        //       quality: 75,
        //     },
        //   },
        // },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
    new CleanWebpackPlugin(),
    ...htmlWebpackPlugins,
    new FriendlyErrorsWebpackPlugin(),
    /* new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require('./build/library/library.json'),
    }), */
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './build/**/*.dll.js'),
    }),
    // new HardSourceWebpackPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    function () {
      // this.plugins() webpack 3.x
      this.hooks.done.tap('done', (stats) => {
        const { compilation } = stats;
        const { errors } = compilation || {};
        if (errors && errors.length && process.argv.indexOf('-watch') === -1) {
          console.log('打包失败,可以在这里做一些日志提交');
          process.exit(1);
        }
      });
    },
  ],
  optimization: {
    // splitChunks: {
    //   minSize: 0, // 引用模块的大小 0 表示只要引用
    //   cacheGroups: {
    //     commons: {
    //       name: 'commons',
    //       chunks: 'all',
    //       minChunks: 2, // 至少引用2次
    //     },
    //     vendors: {
    //       test: /(react|react-dom)/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // },
    minimizer: [
      // webpack4.x 推荐使用  支持es6
      new TerserPlugin({
        parallel: true, // 开启并行压缩
        cache: true, // 默认开启
        /**
         * parallel-uglify-plugin
         * uglifyjs-webpack-plugin 只支持es5
         */
      }),
    ],
  },
  // stats: 'errors-only'
  /*
  errors-only : 只在发生错误时输出
  minimal : 只在发生错误或者有写的编译时输出
  none : 没有输出
  normal : 标准输出
  verbose : 全部输出
  */

};
/*
Hash: 和整改项目的构建相关，只要项目的文件哟修改，整个项目构建的 hash 就会更改
Chunkhash: 和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值
Contenthash: 根据文件内容来定义 hash ，文件内容不变，则 contenthash 不变
*/
