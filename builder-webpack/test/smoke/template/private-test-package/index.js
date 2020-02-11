if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = require('./dist/private-test-package.min.js');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./dist/private-test-package.js');
}
