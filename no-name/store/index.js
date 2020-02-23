import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


export const HTTP = 'http://47.116.70.87:1997'
// export const HTTP = 'http://localhost:1997'

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
