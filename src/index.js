import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import store from './redux/store.js';
import registerServiceWorker from './registerServiceWorker';
// import Game from './app/screens/Game';
import LogIn from './app/screens/LogIn';

// ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <LogIn />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
