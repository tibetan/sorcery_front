import { combineReducers } from '@reduxjs/toolkit';
import { ApiService } from '../services/api';
import bookReducer from './book-slice';
import cartReducer from './cart-slice';
import reviewReducer from './review-slice';
import productReducer from './product-slice';

const rootReducer = combineReducers({
    bookReducer,
    cartReducer,
    reviewReducer,
    productReducer,
    // для RTK Query API добавляй их вручную
    productsApi: ApiService.productsApi.reducer,
    // если будут другие API — тоже явно
});

export default rootReducer;
