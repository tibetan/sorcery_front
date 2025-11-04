import { combineReducers } from '@reduxjs/toolkit';
import { ApiService } from '../services/api';
import cartReducer from './cart-slice';
import reviewReducer from './review-slice';
import productReducer from './product-slice';

const rootReducer = combineReducers({
    cartReducer,
    reviewReducer,
    productReducer,
    // для RTK Query API добавляй их вручную
    productsApi: ApiService.productsApi.reducer,
    reviewsApi: ApiService.reviewsApi.reducer,
    booksApi: ApiService.booksApi.reducer,
});

export default rootReducer;
