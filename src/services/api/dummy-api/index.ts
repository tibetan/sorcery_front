import type { TApiService } from '../../../types/api-service';
import { getUsers } from './users';
import { getReviews } from './reviews';
import { getBooks } from './books';
import { productsApi, useGetProductsQuery, useGetProductQuery } from "./products";
// import {ApiService} from "../index";

// export { productsApi } from './products';

// const { useGetProductsQuery, useGetProductQuery } = ApiService;

const DummyApiService: TApiService & { productsApi: typeof productsApi } = {
    productsApi,
    // useGetProductsQuery,
    // useGetProductQuery,
    // getUsers,
    // getReviews,
    getBooks,

    useGetProductsQuery: useGetProductsQuery as any,
    useGetProductQuery: useGetProductQuery as any,
};

export default DummyApiService;
