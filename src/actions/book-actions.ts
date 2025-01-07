import { bookSlice } from '../reducers/book-slice';
import { AppDispatch } from '../store';
import { IBookListProps } from '../models/i-book-list-props';

export const fetchBooks = (bookstoreService: IBookListProps['bookstoreService'], dispatch: AppDispatch) => () => {
  dispatch(bookSlice.actions.booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(bookSlice.actions.booksLoaded(data)))
    .catch((err) => dispatch(bookSlice.actions.booksError(err)));
};
