const fs = require('fs');
const path = require('path');
const template = require('art-template');

// 注册过滤器
template.defaults.imports.removeSuffix = value => value.slice(0, value.lastIndexOf('.html'));

function compileTemplate(data) {
  const filePath = path.resolve(__dirname, 'template.html');
  const tmpl = template(filePath, {
    html: data.html,
    articles: data.articles,
  });
  return tmpl;
}

module.exports = exports = compileTemplate;

// console.log(`${data}`);
