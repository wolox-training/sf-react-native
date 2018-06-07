import ProfileService from '../../services/ProfileService.js';

export const actions = {
  GET_USER_PROFILE: 'GET_USER_PROFILE',
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  GET_USER_PROFILE_FAILURE: 'GET_USER_PROFILE_FAILURE'
};

export const actionCreators = {
  getUserProfile: id => async dispatch => {
    dispatch({ type: actions.GET_USER_PROFILE });
    const response = await ProfileService.getUserProfile(id);
    if (response.ok) {
      const userProfile = response.data;
      dispatch({
        type: actions.GET_USER_PROFILE_SUCCESS,
        payload: { userProfile }
      });
    } else {
      dispatch({
        type: actions.GET_USER_PROFILE_FAILURE,
        payload: { err: response.problem }
      });
    }
  }
};
