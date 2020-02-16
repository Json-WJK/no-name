import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export const HTTP = 'http://49.232.15.64:1997'
export const HTTP = 'http://127.0.0.1:1997'


export default new Vuex.Store({
  state: {
    APPRefresh: false
  },
  mutations: {
    setAPPRefresh(state, data) {
      console.log('我执行了', state)
      state.APPRefresh = data
    }
  },
  actions: {

  }
})
