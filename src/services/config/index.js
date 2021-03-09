import axios from 'axios';

const urlApi = axios.create({
  baseURL: `${process.env.VUE_APP_CORS_SUPPORT}${process.env.VUE_APP_BASE_URL}`,
  withCredentials: false,
});

urlApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    urlApi.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    console.log(token);

    return config;
  }, (error) => {
    // Dxo something with request error
    return Promise.reject(error);
  })

export default urlApi;