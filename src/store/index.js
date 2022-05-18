import Vue from 'vue'
import Vuex from 'vuex'

// 在一个模块化的打包系统中，你必须通过Vue.use(Vuex)显式的安装Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store
