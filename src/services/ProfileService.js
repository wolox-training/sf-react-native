import api from '../config/api.js';

export default {
  getUserProfile: id => api.get(`/profiles/${id}`)
};
