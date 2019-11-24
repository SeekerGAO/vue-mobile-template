// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

// 全局引入UI库 vant
import '@/plugins/vant'
// 全局引入屏幕适配
import '@/utils/global/rem'
// 全局引入样式重置
import 'reset-css'
// 全局引入UI库 Vant样式重置
import '@/assets/resetui.less'
// 全局引入移动端调试工具
import '@/utils/global/debuger'

// ES6转换ES5
import '@babel/polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});



