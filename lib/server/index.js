#!/usr/bin/env node

const path = require('path');
const http = require('http');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');

/**
 * 实现从 byr-gdp/sss 复制：https://github.com/byr-gdp/sss/blob/master/index.js
 * @param {String} absoluteDirPath 目录的完整路径
 * @param {Number} port 端口
 */
function createServer(absoluteDirPath, port) {
    const serve = serveStatic(absoluteDirPath);
    const index = serveIndex(absoluteDirPath, {'icons': true});
    
    const errorHandlerWrapper = (req, res) => {
      return function() {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end('file or directory not exist');
      }
    }
    
    const server = http.createServer((req, res) => {
      const errorHandler = errorHandlerWrapper(req, res);
      serve(req, res, function(err) {
        if (err) {
          res.end(err);
        } else {
          index(req, res, errorHandler);
        }
      });
    });
    
    // const port = process.env.PORT || 3000;
    server.listen(port);
    server.on('listening', () => {
      console.log('listening at port ' + port);
    });
    server.on('error', (e) => {
      console.error(e);
    });
}

module.exports = exports = createServer;
