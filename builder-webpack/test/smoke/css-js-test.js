/* eslint-disable */
const glob = require('glob-all')

describe('检查是否生成交 css js文件', () => {
  it('应该生成html文件', (done) => {
    const files = glob.sync([
      './dist/index_*.css',
      './dist/search_*.css',
      './dist/index_*.js',
      './dist/search_*.js',
    ]);
    if (files.length > 0) {
      done()
    } else {
      throw new Error('没有生成css js文件')
    }
  });
});