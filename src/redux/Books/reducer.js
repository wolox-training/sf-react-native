import { actions } from './actions';

// Initial state of the store
const initialState = { loading: false, booksList: [], err: null };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: {
      const newState = { ...state, loading: true };
      return newState;
    }
    case actions.GET_BOOKS_SUCCESS: {
      const newState = { ...state, loading: false, booksList: action.payload.booksList };
      return newState;
    }
    case actions.GET_BOOKS_FAILURE: {
      const newState = { ...state, loading: false, err: action.payload.err };
      return newState;
    }
    default:
      return state;
  }
}
