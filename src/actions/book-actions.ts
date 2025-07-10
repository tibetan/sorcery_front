import { bookSlice } from '../reducers/book-slice';
import { AppDispatch } from '../store';
import { IBookListProps } from '../types/book';

export const fetchBooks = (apiService: IBookListProps['apiService'], dispatch: AppDispatch) => () => {
    dispatch(bookSlice.actions.booksRequested());
    apiService.getBooks()
      .then((data) => dispatch(bookSlice.actions.booksLoaded(data)))
      .catch((err) => dispatch(bookSlice.actions.booksError(err)));
};
