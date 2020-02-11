/* eslint-disable */
const glob = require('glob-all')

describe('检查是否生成交html文件', () => {
  it('应该生成html文件', (done) => {
    const files = glob.sync([
      './dist/index.html',
      './dist/search.html',
    ]);
    if (files.length > 0) {
      done()
    } else {
      throw new Error('没有生成html文件')
    }
  });
});
