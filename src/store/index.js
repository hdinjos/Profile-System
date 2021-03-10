import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './oauth';
import registration from './register';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    oauth: oauth,
    registration: registration
  },
});
