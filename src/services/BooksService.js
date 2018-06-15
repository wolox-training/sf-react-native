import api from '../config/api';

export default {
  getBooks: () => api.get('/books')
};
