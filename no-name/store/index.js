import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


// export const HTTP = 'http://47.116.70.87:1997'
export const HTTP = location.protocol + '//' + location.hostname + ':1997'
console.log(HTTP)

const store = new Vuex.Store({
  state: {
    highlight: '/pages/plaza', // tabbar当前高亮 默认为广场高亮
  },
  getters: {},
  mutations: {
    setHighlight(state, data) { // tabbar跳转后修改当前高亮
      state.highlight = data
    }
  },
  actions: {
  }
})

export default store
