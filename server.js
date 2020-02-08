const path = require("path")
const express = require("express")
const webpack = require("webpack")

const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackConfig = require('./webpack.config.js')

const app = express()
const DIST_DIR = path.join(__dirname, "dist")
const PORT = 9090
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  //绑定中间件的公共路径,与webpack配置的路径相同
  publicPath: webpackConfig.output.publicPath,
  quiet: false  //向控制台显示任何内容 
}))

// 设置访问静态文件的路径
app.use(express.static(DIST_DIR))

app.listen(PORT, () => {
  console.log("成功启动：http://localhost:" + PORT)

})