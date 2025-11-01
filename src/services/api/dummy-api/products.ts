import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IProduct } from '../../../types/product';
import { transformProduct } from '../transformers/products';
import { TApiFilters } from '../../../types/api-service';
import { products } from "./data/products";

type TFakeArg = { url: string }

const fakeBaseQuery: BaseQueryFn<TFakeArg, unknown, FetchBaseQueryError> = async ({ url }) => {
    await new Promise((resolve) => setTimeout(resolve, 900));

    if (url === '/products') {
        return { data: products.map(transformProduct) };
    }

    const productMatch = url.match(/^\/products\/(\d+)\/?$/);
    if (productMatch) {
        const id = parseInt(productMatch[1], 10);
        const product = products.find((p) => p.id === id);
        if (product) { return { data: transformProduct(product) } }
        return { error: { status: 404, data: 'Product not found' } };
    }

    return { error: { status: 404, data: 'Not found' } };
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fakeBaseQuery,
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], TApiFilters | undefined>({
            query: () => ({ url: '/products' }),
        }),
        getProduct: builder.query<IProduct, number>({
            query: (id) => ({ url: `/products/${id}/` }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
} = productsApi;
