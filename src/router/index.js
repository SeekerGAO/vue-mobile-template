import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/views/login');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ]
})
