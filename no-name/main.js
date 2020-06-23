import Vue from 'vue'
import App from './App'
import store from './store'
import { HTTP } from '@/store'

import cuCustom from './colorui/components/cu-custom.vue'
import UniRouteGuards from './js_sdk/pocky-route-gurads/lib'; // 路由守卫

Vue.component('cu-custom', cuCustom)

Vue.use(UniRouteGuards); // 挂载路由守卫
const guard = new UniRouteGuards();
// 自定义路由拦截白名单
// const WHILE_LIST = ['/src/pages/home', '/src/pages/log'];

// 跳过路由白名单拦截
// guard.beforeEach((to, from, next) => {
//     if (WHILE_LIST.includes(from.url)) {
//         return next(to.url);
//     }

//     next();
// });

// 拦截 调用 uni.switchTab 页面C并跳转到 页面D
guard.beforeEach((to, from, next) => {
    console.log('\n');
    console.log('=================');
    console.log('guard.beforeEach');
    console.log('to: ', to);
    console.log('from: ', from);
    console.log('=================');
    console.log('\n');
    store.commit("setHighlight", to.url);
    if (!uni.getStorageSync('UID') && !to.url.includes('/pages/login') && !to.url.includes('/pages/basicSetup')) {
        console.log('用户未登录')
        return next({
            url: '/pages/login',
            action: 'reLaunch'
        });
    }
    next();
});

Vue.config.productionTip = false
Vue.prototype.$HTTP = HTTP

// 路由守卫

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
