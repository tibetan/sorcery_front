import { combineReducers } from '@reduxjs/toolkit';

import productReducer from './product-slice';
import bookReducer from './book-slice';
import cartReducer from './cart-slice';
import reviewReducer from './review-slice';

const rootReducer = combineReducers({
    productReducer,
    bookReducer,
    cartReducer,
    reviewReducer,
});

export default rootReducer;
