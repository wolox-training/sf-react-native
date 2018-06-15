import BooksService from '../../services/BooksService';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
};

export const actionCreators = {
  getBooks: () => async dispatch => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await BooksService.getBooks();
    if (response.ok) {
      const booksList = response.data;
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: { booksList }
      });
    } else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE,
        payload: { err: response.problem }
      });
    }
  }
};
