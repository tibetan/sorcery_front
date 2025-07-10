import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct, IProductListProps, TApiProductFilters } from '../types/product';
import { TError } from '../types/error';

type FetchProductsArgs = {
    apiService: IProductListProps['apiService'];
    filters?: TApiProductFilters;
};

export const fetchProducts = createAsyncThunk<
    IProduct[],               // что возвращаем
    FetchProductsArgs,        // что передаём
    { rejectValue: TError }   // если ошибка
    >(
    'products/fetch',
    async ({ apiService, filters = {} }, { rejectWithValue }) => {
        try {
            return await apiService.getProducts(filters);
        } catch (err) {
            return rejectWithValue(new Error((err as Error).message));
        }
    }
);
