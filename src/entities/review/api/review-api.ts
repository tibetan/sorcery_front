import { baseApi } from '@/shared/api/base-api';
import { adaptResponseWith } from '@/shared/lib/api/adaptResponse';
import { transformReview, transformReviews } from "@/entities/review/api/transform";
import { ApiReview, Review } from '@/entities/review/model/types';

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], void>({
            query: () => ({
                url: '/reviews',
            }),
            transformResponse: adaptResponseWith<ApiReview[], Review[]>(
                transformReviews
            ),
            providesTags: ['Review'],
        }),

        getReviewById: builder.query<Review, number>({
            query: (id) => `/reviews/${id}/`,
            transformResponse: adaptResponseWith<ApiReview, Review>(
                transformReview
            ),
            providesTags: (_r, _e, id) => [{ type: 'Review', id }],
        }),
    }),
});

export const {
    useGetReviewsQuery,
    useGetReviewByIdQuery,
} = reviewApi;
