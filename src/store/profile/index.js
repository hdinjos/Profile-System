import { getProfile } from '../../services/profile';

const profile = {
  namespaced: true,
  state: () => ({
    isSuccess: '',
    isLoading: false,
    isFailure: ''
  }),
  mutations: {
    setSuccess(state, payload) {
      state.isSuccess = payload;
      state.isLoading = false;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setFailure(state, payload) {
      state.isFailure = payload;
      state.isLoading = false;
    }
  },
  actions: {
    async callGetProfile({ commit }) {
      commit('setLoading', true);
      const res = await getProfile();
      console.log('di store', res);
      if (res.name === 'Error') {
        commit('setFailure', res.response.data);
      } else {
        commit('setSuccess', res);
      }
    }
  },
  getters: {

  }
}

export default profile;