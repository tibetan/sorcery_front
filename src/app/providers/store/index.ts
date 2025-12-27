import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/base-api';
import { productFiltersReducer } from '@/features/product-filters/model/slice';
import { reviewSortingReducer } from '@/features/review-sorting/model/slice';
import { cartReducer } from '@/entities/cart/model/slice';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        productFilters: productFiltersReducer,
        reviewSorting: reviewSortingReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;