#!/usr/bin/env node

'use strict';
const meow = require('meow');
const wow = require('../lib');

const cli = meow(`
	Usage
	  $ wow <input>

    Options
    
      build
        --source, -s 指定 markdown 文件所在目录
        --output, -o 指定输出目录（缺省值为当前目录下的 output 目录）

      serve
        --directory, -d 指定服务根目录
        --port, -p 指定 server 端口（缺省值3000）

	Examples
      $ wow build -s markdown -o output
      $ wow serve -d output -p 3000
`, {
	flags: {
        source: {
            type: 'string',
            alias: 's',
        },
        output: {
            type: 'string',
            alias: 'o',
            default: 'output',
        },
        port: {
            type: 'number',
            alias: 'p',
            default: 3000,
        },
        directory: {
            type: 'string',
            alias: 'd',
            // default: 'output'
        }
	}
});

// console.log(cli.input)
// console.log(cli.flags);

// TODO: 参数校验
if (cli.input[0] === 'build') {
    wow.build(cli.flags.source, cli.flags.output);
} else if (cli.input[0] === 'serve') {
    wow.serve(cli.flags.directory, cli.flags.port);
}