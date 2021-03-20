import urlApi from './config';

const subUrl = '/oauth';
// const sign_in = (payload) => {
//   return urlApi.post(`${subUrl}/sign_in`, payload)
//     .then(res => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch(err => err);
// }
const sign_in = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}/sign_in`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
}
const credentials = () => urlApi.get(`${subUrl}/credentials`);
const revoke = (payload) => urlApi.post(`${subUrl}/revoke`, payload);

export {
  sign_in,
  credentials,
  revoke
};