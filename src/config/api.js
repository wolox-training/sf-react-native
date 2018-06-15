import Reactotron from 'reactotron-react-native';
import { create } from 'apisauce';

const baseURL = ' http://192.168.122.1:3005';

const api = create({
  baseURL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);
// eslint-disable-next-line
export const apiSetup = dispatch => {
  // eslint-disable-line no-unused-vars, prettier/prettier
  if (baseURL === 'http://wolox.com') {
    console.warn('API baseURL has not been properly initialized');
  }

  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      console.warn('Unhandled session expiration');
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // dispatch(actions.noInternetConnection());
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;
