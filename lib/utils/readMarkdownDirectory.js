const fs = require('fs');
const path = require('path');
const showdown  = require('showdown');
const converter = new showdown.Converter({
    'tables': true
});

function readMarkdownDirectory(absolutePath) {
    const files = fs.readdirSync(absolutePath);
    const fileMap = {};

    files.forEach(file => {
        const stat = fs.statSync(path.resolve(absolutePath, file));

        if (stat.isFile()) {
            const fileAbsolutePath = path.resolve(absolutePath, file);
            const fileContent = fs.readFileSync(fileAbsolutePath, { encoding: 'utf8' });

            fileMap[fileAbsolutePath] = converter.makeHtml(fileContent);
        } else if (stat.isDirectory()) {
            const anotherFileMap = readMarkdownDirectory(path.resolve(absolutePath, file));
            Object.assign(fileMap, anotherFileMap);
        }
    });

    console.log(Object.keys(fileMap));
    return fileMap;
}

module.exports = exports = readMarkdownDirectory;