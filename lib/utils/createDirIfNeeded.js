const fs = require('fs');

/**
 * 检测目录是否存在，若不存在则创建
 * TODO：若目录存在，判断是否为空
 * @param {Sring} absoluteDirPath 
 */
function createDirIfNeeded(absoluteDirPath) {
    const isExist = fs.existsSync(absoluteDirPath);
    if (!isExist) {
        fs.mkdirSync(absoluteDirPath);
    }
}

module.exports = exports = createDirIfNeeded;