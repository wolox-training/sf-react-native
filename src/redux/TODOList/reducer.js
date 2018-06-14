import { actions } from './actions';

// Initial state of the store
const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App']
};

export function reducer(state = initialState, action) {
  const { todos } = state;
  switch (action.type) {
    case actions.ADD_ITEM: {
      const newState = { ...state, todos: [action.payload.item, ...todos] };
      return newState;
    }
    default:
      return state;
  }
}
