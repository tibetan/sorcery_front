import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiBase } from './api-base';
import { IApiReview, IReview } from '../../../types/review';
import { transformReview } from '../transformers/reviews';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: getApiBase() }),
    tagTypes: ['Reviews'],
    endpoints: (builder) => ({
        getReviews: builder.query<IReview[], void>({
            query: () => '/reviews',
            transformResponse: (response: { results: IApiReview[] }) =>
                response.results.map(transformReview),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Reviews' as const, id })),
                        { type: 'Reviews', id: 'LIST' },
                    ]
                    : [{ type: 'Reviews', id: 'LIST' }],
        }),

        // --- Добавление нового отзыва ---
        // addReview: builder.mutation<IReview, ICreateReview>({
        //     query: (newReview) => ({
        //         url: '/reviews',
        //         method: 'POST',
        //         body: newReview,
        //     }),
        //     // После добавления — обновляем список
        //     invalidatesTags: [{ type: 'Reviews', id: 'LIST' }],
        // }),

        // --- Удаление отзыва ---
        deleteReview: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: 'DELETE',
            }),
            // После удаления — обновляем кэш
            invalidatesTags: (result, error, id) => [
                { type: 'Reviews', id },
                { type: 'Reviews', id: 'LIST' },
            ],
        }),
    }),
});

export const {
    useGetReviewsQuery,
} = reviewsApi;
