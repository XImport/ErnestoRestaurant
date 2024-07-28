import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Model: false,
  },
  getters: {
    GetModelState(state) {
      return state.Model;
    },
  },
  mutations: {
    ChangeModelState(state) {
      state.Model = !state.Model;
    },
  },
  actions: {},
  modules: {},
});
