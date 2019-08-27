import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Cube from 'cube-ui'
import './utils/self-adaption' // 移动端自适应

Vue.config.productionTip = false


Vue.use(ElementUI)
// Vue.use(Cube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
