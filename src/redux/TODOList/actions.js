export const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED'
};

export const actionCreators = {
  addItem: item => dispatch => {
    dispatch({
      type: actions.ADD_ITEM,
      payload: { item }
    });
  },
  removeItem: index => dispatch => {
    dispatch({
      type: actions.REMOVE_ITEM,
      payload: { index }
    });
  },
  toggleItemCompleted: index => dispatch => {
    dispatch({
      type: actions.TOGGLE_ITEM_COMPLETED,
      payload: { index }
    });
  }
};
