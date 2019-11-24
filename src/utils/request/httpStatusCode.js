import {toastMessage} from '@/utils';

/**
 * 网络请求错误状态码
 */
class HttpStatusCode {
  // 构造函数
  constructor(code) {
    this.code = code;
  }

  getMessage(){
    switch (this.code) {
      case 400:
        toastMessage('错误请求');
        break;
      case 401:
        toastMessage('未授权，请重新登录');
        break;
      case 403:
        toastMessage('拒绝访问');
        break;
      case 404:
        toastMessage('请求错误,未找到该资源');
        break;
      case 405:
        toastMessage('请求方法未允许');
        break;
      case 408:
        toastMessage('请求超时');
        break;
      case 500:
        toastMessage('服务器端出错');
        break;
      case 501:
        toastMessage('网络未实现');
        break;
      case 502:
        toastMessage('网络错误');
        break;
      case 503:
        toastMessage('服务不可用');
        break;
      case 504:
        toastMessage('网络超时');
        break;
      case 505:
        toastMessage('http版本不支持该请求');
        break;
      default:
        toastMessage(`连接错误'${code}`);
    }
  }
}

export default HttpStatusCode;
