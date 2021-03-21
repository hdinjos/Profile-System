import axios from 'axios';
import router from '../../router';
// import Vue from 'vue';

const urlApi = axios.create({
  baseURL: `${process.env.VUE_APP_CORS_SUPPORT}${process.env.VUE_APP_BASE_URL}`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

urlApi.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      console.log(token);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

urlApi.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    router.push('/login');
  }
  return Promise.reject(error);
});


export default urlApi;