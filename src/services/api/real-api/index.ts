import { productsApi, useGetProductsQuery, useGetProductQuery } from './products';
import { reviewsApi, useGetReviewsQuery } from './reviews';
import type { TApiService } from '../../../types/api-service';

const RealApiService: TApiService<
    typeof productsApi,
    typeof reviewsApi,
    {
        useGetProductsQuery: typeof useGetProductsQuery;
        useGetProductQuery: typeof useGetProductQuery;
        useGetReviewsQuery: typeof useGetReviewsQuery;
    }
    > = {
    productsApi,
    reviewsApi,
    useGetProductsQuery,
    useGetProductQuery,
    useGetReviewsQuery,
};

export default RealApiService;
