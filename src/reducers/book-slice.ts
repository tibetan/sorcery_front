import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBook } from '../types/book';
import { TError } from '../types/error';

// Определяем тип для состояния
interface BookState {
  books: IBook[];
  loading: boolean;
  error: TError;
}

// Начальное состояние
const initialState: BookState = {
  books: [],
  loading: true,
  error: null
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    booksRequested(state) {
      state.books = [];
      state.loading = true;
      state.error = null;
    },
    booksLoaded(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
      state.loading = false;
      state.error = null;
    },
    booksError(state, action: PayloadAction<TError>) {
      state.books = [];
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export default bookSlice.reducer;
