import { baseApi } from '@/shared/api/base-api';
import { adaptResponseWith } from '@/shared/lib/api/adaptResponse';
import { buildQueryString } from '@/shared/api/base-api';
import { transformProduct, transformProducts } from './transform';
import { ApiProduct, Product } from '@/entities/product/model/types';
import { ApiFilters } from '@/shared/api/types';

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], ApiFilters | void>({
            query: (filters) => ({
                url: `/products${filters ? `?${buildQueryString(filters)}` : ''}`,
            }),
            transformResponse: adaptResponseWith<ApiProduct[], Product[]>(
                transformProducts
            ),
            providesTags: ['Product'],
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/products/${id}/`,
            transformResponse: adaptResponseWith<ApiProduct, Product>(
                transformProduct
            ),
            providesTags: (_r, _e, id) => [{ type: 'Product', id }],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productApi;
