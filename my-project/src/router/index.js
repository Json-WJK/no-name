import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Center from '@/views/center'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    // 个人中心
    {
      path: '/center',
      name: 'Center',
      component: Center
    }
  ]
})
