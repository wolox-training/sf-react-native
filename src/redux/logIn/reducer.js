import { actions } from './actions.js';

const defaultState = { loading: false, currentUser: null, err: null, userProfile: null };

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.AUTH_USERS: {
      const newState = { ...state, loading: true };
      return newState;
    }
    case actions.AUTH_USER_SUCCESS: {
      const newState = { ...state, loading: false, currentUser: action.payload.currentUser };
      return newState;
    }
    case actions.AUTH_USER_FAILURE: {
      const newState = { ...state, loading: false, err: action.payload.err };
      return newState;
    }
    default:
      return state;
  }
}
