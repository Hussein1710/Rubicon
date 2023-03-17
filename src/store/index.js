import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    counter(state){
      return state.count
    }
  },
  mutations: {
    updateCount(state, newCount) {
      state.count = newCount
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },

    reset(state) {
      state.count = 0
    }
  },
  
  actions: {
    increment ({commit}){
      commit('increment')
    },
    decrement ({commit}){
      commit('decrement')
    },
    reset ({commit}){
      commit('reset')
    },
  },
  modules: {
  }
})
