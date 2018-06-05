import UserService from '../../services/UserService.js';

export const actions = {
  AUTH_USERS: 'AUTH_USERS',
  AUTH_USER_SUCCESS: 'AUTH_USER_SUCCESS',
  AUTH_USER_FAILURE: 'AUTH_USER_FAILURE'
};

export const actionCreators = {
  // Es una función que devuelve una función.
  // El middleware va a ver que cuando se haga
  // dispatch(actionCreators.authUser());
  // va a encontrar que el resultado de eso es una función y
  // lo va a invocar con `dispatch` y `getState`.
  authUser: (email, pass) => async dispatch => {
    dispatch({ type: actions.AUTH_USERS });
    const response = await UserService.authUser(email, pass);
    if (response.ok) {
      const authUser = response.data[0];
      if (authUser === undefined) {
        dispatch({
          type: actions.AUTH_USER_FAILURE,
          payload: { err: 'Wrong email or password, please try again.' }
        });
      } else {
        const authUserToken = authUser.token;
        localStorage.setItem('token', authUserToken);
        UserService.setHeader(authUser.token);
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
