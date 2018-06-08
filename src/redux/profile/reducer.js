import { actions } from './actions.js';

const defaultState = { loading: false, err: null, userProfile: null };

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.GET_USER_PROFILE: {
      const newState = { ...state, loading: true };
      return newState;
    }
    case actions.GET_USER_PROFILE_SUCCESS: {
      const newState = { ...state, loading: false, userProfile: action.payload.userProfile };
      return newState;
    }
    case actions.GET_USER_PROFILE_FAILURE: {
      const newState = { ...state, loading: false, err: action.payload.err };
      return newState;
    }
    default:
      return state;
  }
}
