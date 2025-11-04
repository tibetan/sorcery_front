import { booksApi, useGetBooksQuery } from './books';
import { productsApi, useGetProductsQuery, useGetProductQuery } from './products';
import { reviewsApi, useGetReviewsQuery } from './reviews';
import type { TApiService } from '../../../types/api-service';

const RealApiService: TApiService<
    typeof productsApi,
    typeof reviewsApi,
    typeof booksApi,
    {
        useGetProductsQuery: typeof useGetProductsQuery;
        useGetProductQuery: typeof useGetProductQuery;
        useGetReviewsQuery: typeof useGetReviewsQuery;
        useGetBooksQuery: typeof useGetBooksQuery;
    }
    > = {
    productsApi,
    reviewsApi,
    booksApi,
    useGetProductsQuery,
    useGetProductQuery,
    useGetReviewsQuery,
    useGetBooksQuery,
};

export default RealApiService;
