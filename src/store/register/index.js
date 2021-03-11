import { register, otpResend, otpMatch } from '../../services/register';

const registration = {
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
    async callRegister({ commit }, payload) {
      commit('setLoading', true);
      const res = await register(payload);
      if (res.name === 'Error') {
        if (!res.response) {
          commit('setFailure', 'Network Error');
        } else {
          commit('setFailure', res.response.data.error.errors[0]);
        }
      } else {
        commit('setSuccess', res);
        localStorage.setItem('user_data', JSON.stringify(res));
      }
    },
    async resendCode({ commit }, payload) {
      commit('setLoading', true);
      const res = await otpResend(payload);
      if (res.name === 'Error') {
        commit('setLoading', false);
      } else {
        commit('setLoading', false);
      }
    },
    async verifyAccount({ commit }, payload) {
      commit('setLoading', true);
      const res = await otpMatch(payload);
      if (res.name === 'Error') {
        commit('setLoading', false);
      } else {
        commit('setSuccess', res);
        localStorage.setItem('token', res.data.user.access_token);
      }
    }
  },
  getters: {

  }
}

export default registration;