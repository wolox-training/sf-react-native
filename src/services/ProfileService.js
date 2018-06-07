import api from '../config/api.js';

export default {
  getUserProfile: email => api.get(`/profiles?email=${email}`)
};
