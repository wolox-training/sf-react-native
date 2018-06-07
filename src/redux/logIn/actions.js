import { push } from 'react-router-redux';

import UserService from '../../services/UserService.js';

import { strings } from './strings';

export const actions = {
  AUTH_USERS: 'AUTH_USERS',
  AUTH_USER_SUCCESS: 'AUTH_USER_SUCCESS',
  AUTH_USER_FAILURE: 'AUTH_USER_FAILURE'
};

export const actionCreators = {
  authUser: (email, pass) => async dispatch => {
    dispatch({ type: actions.AUTH_USERS });
    const response = await UserService.authUser(email, pass);
    if (response.ok) {
      const authUser = response.data[0];
      if (authUser === undefined) {
        window.alert(`${strings.logInError}${strings.errorMsg}`);
        dispatch({
          type: actions.AUTH_USER_FAILURE,
          payload: { err: strings.errorMsg }
        });
      } else {
        const authUserToken = authUser.token;
        localStorage.setItem('userID', authUser.id);
        localStorage.setItem('token', authUserToken);
        UserService.setHeader(authUserToken);
        dispatch(push('/game'));
        dispatch({
          type: actions.AUTH_USER_SUCCESS,
          payload: { currentUser: authUser }
        });
      }
    } else {
      dispatch({
        type: actions.AUTH_USER_FAILURE,
        payload: { err: response.problem }
      });
    }
  }
};
