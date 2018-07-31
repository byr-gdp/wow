#!/usr/bin/env node

const ghpages = require('gh-pages');

ghpages.publish('test/output', function (err) {
  if (err) {
    console.log(err); // eslint-disable-line
  } else {
    console.log('push to gh-pages successed'); // eslint-disable-line
  }
});
