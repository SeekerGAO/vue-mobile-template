import axios from 'axios';
import Qs from 'qs';

import HttpStatusCode from './httpStatusCode';
import {toastMessage} from "@/utils";

/**
 * 接口地址常量
 * @type {string}
 */
const API_ROOT = process.env.API_ROOT;   // 开发环境、正式环境接口访问地址

/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
  baseURL: API_ROOT,
  withCredentials: false,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {

    if (config.method === 'post') {
      config.data = Qs.stringify(config.data);
    }

    return config;
  }, err => {
    return Promise.reject(err);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {

    if (err && err.response) {
      let httpStatusCode = new HttpStatusCode(err.response.status);
      httpStatusCode.getMessage();
    } else {
      toastMessage('连接到服务器失败！');
    }
    return Promise.reject(err.response)
  }
);

export default service;
