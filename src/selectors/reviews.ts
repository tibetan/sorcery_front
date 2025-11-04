import { createSelector } from '@reduxjs/toolkit';
import { ApiService } from '../services/api';
import { RootState } from '../store';
import { IReview } from '../types/review';

const { reviewsApi } = ApiService;

export const selectSortBy = (state: RootState) => state.reviewReducer.sortedBy;

// Берём кэшированные данные из RTK Query безопасно
export const selectSortedReviews = createSelector(
    [reviewsApi.endpoints.getReviews.select(), selectSortBy],
    (reviewsResult, sortedBy): IReview[] => {
        const data = reviewsResult?.data ?? [];

        if (!sortedBy) return data;

        return [...data].sort((a, b) => {
            if (sortedBy === 'author') {return a.userId - b.userId}
            if (sortedBy === 'rating') {return b.rating - a.rating}
            if (sortedBy === 'date') {
                const dateA = new Date(a.createdAt ?? 0).getTime();
                const dateB = new Date(b.createdAt ?? 0).getTime();
                return dateB - dateA;
            }
            return 0;
        });
    }
);
