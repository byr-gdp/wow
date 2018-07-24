# wow

> A static site generator. Write markdown, build HTML.

## Install

- `git clone` 代码。
- `npm install` 安装依赖。
- `npm link` 本地调试。

## Usage

- `wow build -s markdown -o output`(-s: 源文件目录，-o: 输出文件目录)。
- `wow serve -d output -p 3000`(-d: 服务根目录路径，-p: 端口)。

## Test

- 完成 Install 步骤
- 进入 test 目录
- `wow build -s markdown`
- `wow serve -d output`
- visit <http://127.0.0.1:3000>

## Preview

[wow](//byr-gdp.github.io/wow/index.html)

## Todo

- 访问统计，通过配置文件方式。
- 代码中 TODO 解决。
- CSS 抽出。
- 增加 publish 指令，发送指令目录到当前仓库 gh-pages 分支。

## Done

- 读取 markdown 目录，生成目录结构 json。
- 处理 markdown 文件生成 html。
- 生成 html 并注入基本页面模板和样式。
- 静态服务器。
- 首页兜底。
- gh-pages 推送，利用 GitHub 预览（仅本项目测试使用，详见 `npm run push-gh-pages` 指令）。
- build 前 clean 操作。
