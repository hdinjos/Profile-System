import urlApi from './config';

const subUrl = '/profile';

const getProfile = async () => {
  try {
    const res = await urlApi.get(`${subUrl}/me`);
    console.log('di service', res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};

const setProfile = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
};

const setCareer = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}/career`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
};

const setEducation = async (payload) => {
  try {
    const res = await urlApi.post(`${subUrl}/education`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
};

export {
  getProfile,
  setProfile,
  setCareer,
  setEducation
};