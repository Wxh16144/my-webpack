const assert = require('assert')


describe('测试webpack-base', () => {
  const baseConfig = require('../../lib/webpack.prod')
  it('检查entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/wuxh/Desktop/my-webpack/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(baseConfig.entry.search, '/Users/wuxh/Desktop/my-webpack/builder-webpack/test/smoke/template/src/search/index.js')
  })
})
