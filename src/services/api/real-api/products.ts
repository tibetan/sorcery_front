import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiBase, buildQueryString } from './api-base';
import { IApiProduct, IProduct, TApiProductFilters } from '../../../types/product';
import { transformProduct } from '../transformers/products';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: getApiBase() }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], TApiProductFilters | undefined>({
            query: (filters) => {
                const queryString = buildQueryString(filters);
                return `/products${queryString ? `?${queryString}` : ''}`;
            },
            transformResponse: (response: { results: IApiProduct[] }) =>
                response.results.map(transformProduct),
        }),
        getProduct: builder.query<IProduct, number>({
            query: (id) => `/products/${id}/`,
            transformResponse: (response: IApiProduct) => transformProduct(response),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
} = productsApi;
