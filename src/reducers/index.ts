import { combineReducers } from '@reduxjs/toolkit';

import bookReducer from './book-slice';
import cartReducer from './cart-slice';

const rootReducer = combineReducers({
  bookReducer,
  cartReducer,
});

export default rootReducer;
