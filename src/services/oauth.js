import urlApi from './config';

const subUrl = '/oauth';
const sign_in = (payload) => urlApi.post(`${subUrl}/sign_in`, payload);
const credentials = () => urlApi.get(`${subUrl}/credentials`);
const revoke = (payload) => urlApi.post(`${subUrl}/revoke`, payload);

export {
  sign_in,
  credentials,
  revoke
};