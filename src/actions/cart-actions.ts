import { AppDispatch } from '../store';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../reducers/cart-slice';

export const addBookToCart = (id: number) => (dispatch: AppDispatch) => {
  dispatch(bookAddedToCart(id));
};

export const removeBookFromCart = (id: number) => (dispatch: AppDispatch) => {
  dispatch(bookRemovedFromCart(id));
};

export const removeAllBooksFromCart = (id: number) => (dispatch: AppDispatch) => {
  dispatch(allBooksRemovedFromCart(id));
};
