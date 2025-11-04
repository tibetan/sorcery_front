import type { TApiService } from '../../../types/api-service';
import { getUsers } from './users';
import { getBooks } from './books';
import { productsApi, useGetProductsQuery, useGetProductQuery } from "./products";
import { reviewsApi, useGetReviewsQuery } from "./reviews";

const DummyApiService: TApiService<
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
    getBooks,
    useGetProductsQuery,
    useGetProductQuery,
    useGetReviewsQuery,
};

export default DummyApiService;
