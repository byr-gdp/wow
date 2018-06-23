const path = require('path');
const createServer = require('../lib/server');

/**
 * 启动静态服务
 * @param {String} relativeDir 相对于 process.cwd() 的路径
 * @param {Number} port 端口
 */
function serve(relativeDir, port) {
    createServer(path.resolve(process.cwd(), relativeDir), port);
}

module.exports = exports = serve;

