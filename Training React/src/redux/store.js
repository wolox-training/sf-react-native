import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer as router } from 'react-router-redux';

import { reducer as auth } from './logIn/reducer';
import { reducer as profile } from './profile/reducer';

export const history = createHistory();

const reducer = combineReducers({
  auth,
  profile,
  router,
  form: reduxFormReducer // mounted under "form"
});

const middlewares = [routerMiddleware(history)];
middlewares.push(thunk);

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
