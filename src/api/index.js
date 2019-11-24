import request from '@/utils/request';

/**
 * demo
 * @param data
 * @returns {AxiosPromise}
 */
export function demo(data) {
  return request({
    method: 'post',
    url: '',
    data
  })
}

