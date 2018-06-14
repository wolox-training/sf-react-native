export const actions = {
  ADD_ITEM: 'ADD_ITEM'
};

export const actionCreators = {
  addItem: item => dispatch => {
    dispatch({
      type: actions.ADD_ITEM,
      payload: { item }
    });
  }
};
