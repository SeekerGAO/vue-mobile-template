# vue移动端项目模板

## Project Directory 
- build 项目构建(webpack)相关代码
- config 配置目录，包括端口号
  - dev.env.js 使用测试接口地址
  - dev-pre.env.js 测试接口打包预览
  - index.js 主配置文件
  - local.env.js 本地端口调试
  - prod.env.js 正式接口地址
  - pro-pre.env.js 打包正式接口预览
- src 开发目录
  - api 存放接口
  - assets 存放静态资源，经过webpack打包，重新编译
  - components 组件
  - plugin 第三方插件
  - router 路由文件
  - store 状态管理
  - utils 工具类文件
  - views 主要视图文件
- static 存放静态资源，外部第三方
- test 测试目录
- package.json 项目配置

## Install

``` bash
$ git clone git@github.com:SeekerGAO/vue-mobile-template.git

$ cd vue-mobile-template

# install dependencies
$ npm install 

# serve with hot reload at localhost:8080 
npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

# start local server
$ npm run serve

# test
$ npm run test
```

## 🔗 链接
- [Vue-CLI](https://cli.vuejs.org/zh)
- [Vue](https://cn.vuejs.org/index.html)
- [Vue-Router](https://router.vuejs.org/zh)
- [Vuex](https://vuex.vuejs.org/zh/guide)
- [Axios](https://github.com/axios/axios)
- [Webpack](https://webpack.js.org)
- [Vant](https://youzan.github.io/vant/#/zh-CN/intro)
