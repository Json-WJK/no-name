
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
