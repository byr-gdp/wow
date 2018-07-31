const path = require('path');
const ghpages = require('gh-pages');

/**
 * 发布指定目录到当前项目的 gh-pages 分支
 * @param {String} relativeDir 目录相对路径
 */
const publish = (relativeDir) => {
  const directoryAbsolutePath = path.resolve(process.cwd(), relativeDir);
  console.log('path is ', directoryAbsolutePath); // eslint-disable-line

  ghpages.publish(directoryAbsolutePath, function (err) {
    if (err) {
      console.log(err); // eslint-disable-line
    } else {
      console.log('push to gh-pages successed'); // eslint-disable-line
    }
  });
};

module.exports = exports = publish;

