import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';

import store from './store.js';
import showResults from './showResults.js';
import LogInForm from './layouts.js';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Log In</h2>
      <LogInForm onSubmit={showResults} />
      <Values form="logIn" />
    </div>
  </Provider>,
  rootEl
);
