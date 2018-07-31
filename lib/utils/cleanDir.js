const fs = require('fs');

/**
 * 清除指定目录下所有文件
 * @param {Sring} absoluteDirPath
 */
function cleanDir(absoluteDirPath) {
  var files = [];
  if (fs.existsSync(absoluteDirPath)) {
    files = fs.readdirSync(absoluteDirPath);
    files.forEach(function (file, index) {
      var curPath = absoluteDirPath + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteall(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    // fs.rmdirSync(path);
  }
}

module.exports = exports = cleanDir;
