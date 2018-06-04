import api from '../config/api.js';

export default {
  getUsers: () => api.get('/users'),
  authUser: (email, pass) => api.get(`/users?email=${email}&password=${pass}`),
  setHeader: token => api.setHeader('Authorization', token)
};
