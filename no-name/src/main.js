import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import Cube from 'cube-ui'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import './utils/self-adaption' // 移动端自适应

import FastClick from 'fastclick' // mandui 浏览器兼容

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false


// Vue.use(ElementUI)
Vue.use(mandMobile)
// Vue.use(Cube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
