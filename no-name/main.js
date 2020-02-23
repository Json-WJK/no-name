import Vue from 'vue'
import App from './App'
import store from './store'
import { HTTP } from '@/store'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false
Vue.prototype.$HTTP = HTTP

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
