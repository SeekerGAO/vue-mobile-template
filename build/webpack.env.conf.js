// 定义参数配置
const argv = require('yargs').argv;

// 获取环境变量
const env = argv.env || 'dev'; // 默认开发环境

// require指定的环境配置文件
const envConfigFile = `../config/${env}.env.js`;

// 将require的配置文件export出去
module.exports = require(envConfigFile);
