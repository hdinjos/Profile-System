import axios from 'axios';

const urlApi = axios.create({
  // baseURL: 'https://safe-ravine-02458.herokuapp.com/http://pretest-qa.dcidev.id/api/v1',
  baseURL: process.env.VUE_APP_CORS_SUPPORT + process.env.VUE_APP_BASE_URL + '',
  withCredentials: false,
});

urlApi.interceptors.request.use((config) =>
  // Do something before request is sent
  config,
  (error) =>
    // Do something with request error
    Promise.reject(error));

// Add a response interceptor
urlApi.interceptors.response.use((response) =>
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  response,
  (error) =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error));

export default urlApi;
