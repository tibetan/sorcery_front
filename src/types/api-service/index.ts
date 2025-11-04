import { productsApi } from '../../services/api/real-api/products';
import { reviewsApi } from '../../services/api/real-api/reviews';
import { productsApi as fakeProductsApi } from '../../services/api/dummy-api/products';
import { reviewsApi as fakeReviewsApi } from '../../services/api/dummy-api/reviews';

export type TApiService<
    TProductsApi,
    TReviewsApi,
    THooks extends Record<string, unknown> = {}
    > = {
    productsApi: TProductsApi;
    reviewsApi: TReviewsApi;
    getBooks?: () => any;
} & THooks;

export type TApiFilters = Record<string, string | string[]>;

export type TFakeArg = { url: string }

export type TApiServiceReal = TApiService<
    typeof productsApi,
    typeof reviewsApi
    >;

export type TApiServiceFake = TApiService<
    typeof fakeProductsApi,
    typeof fakeReviewsApi
    >;
