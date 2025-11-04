import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { TApiFilters, TFakeArg } from "../../../types/api-service";
import { IReview } from '../../../types/review';
import { reviews } from "./data/reviews";
import { transformReview } from "../transformers/reviews";

const fakeBaseQuery: BaseQueryFn<TFakeArg, unknown, FetchBaseQueryError> = async ({ url }) => {
    await new Promise((resolve) => setTimeout(resolve, 2900));

    if (url === '/reviews') {
        return { data: reviews.map(transformReview) };
    }

    return { error: { status: 404, data: 'Not found' } };
};

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fakeBaseQuery,
    tagTypes: ['Reviews'],
    endpoints: (builder) => ({
        getReviews: builder.query<IReview[], TApiFilters | void>({
            query: () => ({ url: '/reviews' }),
        }),
    }),
});

export const {
    useGetReviewsQuery,
} = reviewsApi;
