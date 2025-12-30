import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { reviewApi } from '@/entities/review/api/review-api';
import { Review } from './types';

// Критерий сортировки
export const selectSortBy = (state: RootState) => state.reviewSorting.sortedBy;

// Все отзывы из кэша RTK Query — НЕ создаем новый массив здесь
export const selectAllReviews = createSelector(
    (state: RootState) => reviewApi.endpoints.getReviews.select(undefined)(state)?.data,
    (data) => data ?? []
);

// Сортированные отзывы — здесь можно безопасно копировать массив
export const selectSortedReviews = createSelector(
    [selectAllReviews, selectSortBy],
    (reviews, sortedBy): Review[] => {
        if (!sortedBy) return reviews;

        return [...reviews].sort((a, b) => {
            if (sortedBy === 'author') return (a.user?.id ?? 0) - (b.user?.id ?? 0);
            if (sortedBy === 'rating') return b.rating - a.rating;
            if (sortedBy === 'date') {
                const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                return dateB - dateA;
            }
            return 0;
        });
    }
);
