import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { reducer as auth } from './logIn/reducer';

const reducer = combineReducers({
  auth,
  form: reduxFormReducer // mounted under "form"
});

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(
  reducer,
  applyMiddleware(thunk)
);

export default store;
