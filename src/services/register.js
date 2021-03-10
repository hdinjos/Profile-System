import urlApi from './config';

const subUrl = `/register`;
const register = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
}

const otpMatch = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}/otp/match`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
}
const otpResend = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}/otp/request`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
}
const destroyReg = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}/remove`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
}
export {
  register,
  otpMatch,
  otpResend,
  destroyReg
}