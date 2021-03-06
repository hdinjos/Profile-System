import { sign_in, credentials } from '../../services/oauth';
import store from '../../store';

const oauth = {
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
    },
  },
  actions: {
    async getData({ commit }, payload) {
      console.log(payload);
      commit('setLoading', true);
      const res = await sign_in(payload);
      console.log(res.name);
      if (res.name === 'Error') {
        if (!res.response) {
          commit('setFailure', 'Network Error');
        } else {
          const errMsg = res.response.data.error.errors[0].indexOf('phone')
          if (errMsg + 1) {
            const msgA = 'The phone is not registered'
            commit('setFailure', msgA)
            console.log("The phone is not registered");
          } else {
            const msgB = 'Password is incorrect'
            commit('setFailure', msgB)
            console.log('Password is incorrect');
          }
        }

      } else {
        localStorage.setItem('token', res.data.user.access_token);
        const resCredential = await credentials();
        commit('setSuccess', res);
        store.commit('profile/setSuccess', resCredential);
      }
    }
  },
  getters: {

  }
}

export default oauth;