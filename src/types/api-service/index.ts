import { productsApi } from '../../services/api/real-api/products';
import { reviewsApi } from '../../services/api/real-api/reviews';
import { booksApi } from '../../services/api/real-api/books';
import { productsApi as fakeProductsApi } from '../../services/api/dummy-api/products';
import { reviewsApi as fakeReviewsApi } from '../../services/api/dummy-api/reviews';
import { booksApi as fakeBooksApi } from '../../services/api/dummy-api/books';

export type TApiService<
    TProductsApi,
    TReviewsApi,
    TBooksApi,
    THooks extends Record<string, unknown> = {}
    > = {
    productsApi: TProductsApi;
    reviewsApi: TReviewsApi;
    booksApi: TBooksApi;
} & THooks;

export type TApiFilters = Record<string, string | string[]>;

export type TFakeArg = { url: string }

export type TApiServiceReal = TApiService<
    typeof productsApi,
    typeof reviewsApi,
    typeof booksApi
    >;

export type TApiServiceFake = TApiService<
    typeof fakeProductsApi,
    typeof fakeReviewsApi,
    typeof fakeBooksApi
    >;
