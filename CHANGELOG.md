# [1.0.0](https://github.com/Wxh16144/my-webpack/compare/1.3.0...1.0.0) (2020-02-12)



# [1.3.0](https://github.com/Wxh16144/my-webpack/compare/1.2.0...1.3.0) (2020-02-12)


### Bug Fixes

* 修复引用本地私有包安装失败问题 ([33b71fb](https://github.com/Wxh16144/my-webpack/commit/33b71fb18ec41b94b566a302e6890f315026808a))


### Performance Improvements

* 优化构建速度 ([fb21538](https://github.com/Wxh16144/my-webpack/commit/fb2153816ce5250847fcc7e5e0e0b2291a1e63b1))
* 使用terser-webpack-plugin多进程压缩代码 ([14ea6fd](https://github.com/Wxh16144/my-webpack/commit/14ea6fdce4e49b07717749c562e60fa7b6839642))
* 使用thread-loader多进程打包 ([971c022](https://github.com/Wxh16144/my-webpack/commit/971c022c59bc6162887ddd58f6a2cecbd52e8f17))
* 使用tree-shaking去掉没有使用到的css ([3efb6c5](https://github.com/Wxh16144/my-webpack/commit/3efb6c5776ffd5e76721d1cf6bfcb761e7ae0d53))
* 压缩图片 ([76917bd](https://github.com/Wxh16144/my-webpack/commit/76917bd11f3008cefcdd4d2d9f482731ece505bd))
* 预编译资源模块 ([b3b6221](https://github.com/Wxh16144/my-webpack/commit/b3b6221ae4baa54f871d82b874b57714fe78447e))


### Reverts

* Revert "feat: 使用speed-measure-webpack-plugin分析loader和plugin速度" ([cafb7a9](https://github.com/Wxh16144/my-webpack/commit/cafb7a9f70b8b7cc4aaedd74743d7ff06fc6149b))
* Revert "feat: 使用webpack-bundle-analyzer分析构建体积" ([ec19d7a](https://github.com/Wxh16144/my-webpack/commit/ec19d7ab7734b16afebc87fda04943f0c5a67b26))



# [1.2.0](https://github.com/Wxh16144/my-webpack/compare/1.0.0...1.2.0) (2020-02-10)


### Features

* 完成一个简单的ssr ([6ed9fd0](https://github.com/Wxh16144/my-webpack/commit/6ed9fd0843e54085cbb039abfc1038e4ebcbda1d))
* **webpack:** 添加一个私有包使用webpack打包 ([c4a9a87](https://github.com/Wxh16144/my-webpack/commit/c4a9a87f8aaa303a26795002db30f02aa467c32a))
* 添加eslint ([2124160](https://github.com/Wxh16144/my-webpack/commit/21241602b454862b61e76add9d88019b75da9415))


### Performance Improvements

* 优化构建时控制台的日志 ([2c2a465](https://github.com/Wxh16144/my-webpack/commit/2c2a465c5d7805b40419b0d16326f6b8c61a4ae4))
* 使用splitChunks优化react和react-dom ([a2e6a89](https://github.com/Wxh16144/my-webpack/commit/a2e6a89ce91b9c9b6b5348ccebca2230fb61d419))
* 使用splitChunks调用次数来优化公共资源 ([c3ce418](https://github.com/Wxh16144/my-webpack/commit/c3ce418342cb39138ed95d5c8523658e5c53a4c5))
* 测试ree-shaking ([f7900d6](https://github.com/Wxh16144/my-webpack/commit/f7900d646bf1f7ad1e1c5fe58082d438b0acd007))
* 添加构建失败钩子 ([5a696ed](https://github.com/Wxh16144/my-webpack/commit/5a696ed2275eedbfbd47f1c41348e08cdc746358))



# [1.0.0](https://github.com/Wxh16144/my-webpack/compare/e7c8ed469f8036acf383d8ed8cfd01a3a5ff9586...1.0.0) (2020-02-08)


### Features

* 一个简单的例子 ([e7c8ed4](https://github.com/Wxh16144/my-webpack/commit/e7c8ed469f8036acf383d8ed8cfd01a3a5ff9586))
* 使用raw-loader做内联 ([a186919](https://github.com/Wxh16144/my-webpack/commit/a186919b64b1a82911fb7b0f560e5b8b6462988d))
* 添加babel-loader ([3223ea5](https://github.com/Wxh16144/my-webpack/commit/3223ea577f2d04d1e07186b43c21a96640f87aa5))
* 添加css压缩和html压缩 ([5476a6f](https://github.com/Wxh16144/my-webpack/commit/5476a6f823101701beee837f9a852a8a4a520cfd))
* 添加file-loader处理图片和字体资源 ([092dd61](https://github.com/Wxh16144/my-webpack/commit/092dd61f59ba6f28d34234279b4632535df078a8))
* 添加less-loader解析 ([2059c8a](https://github.com/Wxh16144/my-webpack/commit/2059c8a17d29c4f530c9ad414f7124ec57071476))
* 添加px2rem-loader和lib-flexible做移动端单位转换 ([4fbfa8f](https://github.com/Wxh16144/my-webpack/commit/4fbfa8f3089d920176355d716639ae2d755c0410))
* 添加react解析 ([e3fd3b1](https://github.com/Wxh16144/my-webpack/commit/e3fd3b14415d70e16576b5969e3b3f031fb3e068))
* 添加wetch监听文件变化 ([4011ac6](https://github.com/Wxh16144/my-webpack/commit/4011ac6cc5d96d758526d10fae173907d4096eef))
* 添加多个入口文件 ([bf414a4](https://github.com/Wxh16144/my-webpack/commit/bf414a4c16579d4e208a5889292b56540e0d5e0c))
* 添加文件指纹 hash ([1f6d1ec](https://github.com/Wxh16144/my-webpack/commit/1f6d1ec2e05d43e4a764f9c72fb14345c9d35651))


### Performance Improvements

* 使用postcss+autoprefixer优化css ([3c4d86e](https://github.com/Wxh16144/my-webpack/commit/3c4d86ea60605814add77d7c541b3815fecb4881))
* 使用url-loader代替file-loader处理图片 ([49d6877](https://github.com/Wxh16144/my-webpack/commit/49d6877843f6a7cf4d903b606ce3f6170983b9a4))
* 使用webpack内置的HotModuleReplacementPlugin代替watch ([87e2435](https://github.com/Wxh16144/my-webpack/commit/87e2435aefbb7740633aa97ea0096846f3332b68))
* 添加clean-webpack-plugin清理dist目录 ([a4dd568](https://github.com/Wxh16144/my-webpack/commit/a4dd5684bcdc765c5414f4e661b67671d3f9ca2a))



