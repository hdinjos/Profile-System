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
const credentials = async () => {
  try {
    const token = localStorage.getItem('token');
    const params = {
      access_token: token
    }
    const res = await urlApi.get(`${subUrl}/credentials`, { params });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const revoke = (payload) => urlApi.post(`${subUrl}/revoke`, payload);

export {
  sign_in,
  credentials,
  revoke
};