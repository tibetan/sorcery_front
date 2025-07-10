import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { Draft } from 'immer';

import { fetchProducts } from '../actions/product-actions';

import { IProduct } from '../types/product';
import { TError } from '../types/error';

// Определяем тип для состояния
interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: TError;
}

// Начальное состояние
const initialState: ProductState = {
  products: [],
  loading: true,
  error: null
};

export const productSlice = createSlice<
        ProductState,
        SliceCaseReducers<ProductState>,
        'products',
        {}
    >({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state: Draft<ProductState>) => {
            state.products = [];
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state: Draft<ProductState>, action) => {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchProducts.rejected, (state: Draft<ProductState>, action) => {
            state.products = [];
            state.loading = false;
            state.error = action.payload ?? new Error('Unknown error');
        });
    }
});

export default productSlice.reducer;
