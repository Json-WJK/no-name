import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Member from '@/views/member'
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
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
})
