import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    dataKey:'test',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
