const path = require('path')

process.chdir(path.join(__dirname, 'smoke/template'))

describe('单元测试', () => {
  require('./unit/webpack-base-test')
})
