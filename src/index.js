import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import TopBar from './app/components/TopBar/topBar';
import './scss/index.css';
import store, { history } from './redux/store.js';
import registerServiceWorker from './registerServiceWorker';
import Game from './app/screens/Game';
import LogIn from './app/screens/LogIn';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Fragment>
          <TopBar />
          <Component {...props} />
        </Fragment>
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

const Empty = () => <div>Empty Page</div>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/game" component={Game} />
        <PrivateRoute path="/profile" component={Empty} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
