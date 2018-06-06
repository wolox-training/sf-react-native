import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './scss/index.scss';
import store, { history } from './redux/store.js';
import registerServiceWorker from './registerServiceWorker';
import Game from './app/screens/Game';
import LogIn from './app/screens/LogIn';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.string
};

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={LogIn} />
          <PrivateRoute path="/game" component={Game} />
        </Switch>
      </Router>
    </Fragment>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
