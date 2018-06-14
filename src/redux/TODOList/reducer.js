import { actions } from './actions';

// Initial state of the store
const initialState = {
  todos: [
    { label: 'Click to remove', completed: false },
    { label: 'Learn React Native', completed: false },
    { label: 'Write Code', completed: true },
    { label: 'Ship App', completed: false }
  ]
};

export function reducer(state = initialState, action) {
  const { todos } = state;
  switch (action.type) {
    case actions.ADD_ITEM: {
      const newState = { ...state, todos: [{ label: action.payload.item, completed: false }, ...todos] };
      return newState;
    }
    case actions.REMOVE_ITEM: {
      const newState = { ...state, todos: todos.filter((item, i) => i !== action.payload.index) };
      return newState;
    }
    case actions.TOGGLE_ITEM_COMPLETED: {
      const newState = {
        ...state,
        todos: todos.map((item, i) => {
          if (i === action.payload.index) {
            return { label: item.label, completed: !item.completed };
          }
          return item;
        })
      };
      return newState;
    }
    default:
      return state;
  }
}
