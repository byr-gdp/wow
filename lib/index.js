const build = require('./build');
const serve = require('./serve');
const publish = require('./publish');

// TDOO: 区分全局调用和模块调用

module.exports = exports = {
  build,
  serve,
  publish,
};
