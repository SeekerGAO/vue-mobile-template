import {Toast} from 'vant';

/**
 * 文本提示
 * @param message
 */
export const toastMessage = (message) => {
  Toast({
    position: 'bottom',
    message: message,
    duration: 1500,
  });
};

/**
 * 判断值是否为空
 * @param obj
 * @return {boolean}
 */
export const isVoidVal = (obj) => {
  return (undefined === obj || "undefined" === obj || "" === obj || null === obj || "null" === obj);
};
