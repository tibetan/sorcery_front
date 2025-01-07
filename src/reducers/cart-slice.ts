import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bookSlice } from './book-slice';
import { ICart } from '../models/i-cart';
import { IBook } from '../models/i-book';

// Определяем тип для состояния
interface CartState {
  cartItems: ICart[];
  orderTotal: number;
  books: IBook[];
}

// Начальное состояние
const initialState: CartState = {
  cartItems: [],
  orderTotal: 0,
  books: [],
};

const updateCartItems = (cartItems: ICart[], item: ICart, idx: number) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book: IBook, item: ICart, quantity: number) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item || {};

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};

const updateOrder = (
  state: CartState,
  bookId: number,
  quantity: number
) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => id === bookId);
  if (!book) {
    console.warn(`Book with id ${bookId} not found`);
    return;
  }

  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  state.cartItems = updateCartItems(cartItems, newItem, itemIndex);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    bookAddedToCart(state, action: PayloadAction<number>) {
      updateOrder(state, action.payload, 1);
    },
    bookRemovedFromCart(state, action: PayloadAction<number>) {
      updateOrder(state, action.payload, -1);
    },
    allBooksRemovedFromCart(state, action: PayloadAction<number>) {
      const item = state.cartItems.find(({id}) => id === action.payload);
      if (!item) {
        return;
      }
      updateOrder(state, action.payload, -item.count);
    },
},
  extraReducers: (builder) => {
    builder.addCase(
      bookSlice.actions.booksLoaded,
      (state: CartState, action: PayloadAction<IBook[]>) => {
        state.books = action.payload;
      }
    );
  },
});

export const { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } = cartSlice.actions;

export default cartSlice.reducer;
