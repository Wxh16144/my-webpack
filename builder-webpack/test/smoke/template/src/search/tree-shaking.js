export function a() {
  return 'This is func a'
}

export function b() {
  return 'This is func b'
}



/*
  webpack.config.js
    mode: 'production'  // 默认开启tree-shaking
    mode: 'none' // 关闭

  tree-shaking  会处理 DCE(Elimination)
    + 代码不会被执行，不可到达
    + 代码执行的结果不会被用到
    + 代码只会影响死变量 （只写不读）
*/