import { RootState } from '@/app/providers/store';

export const selectReviewSortBy = (state: RootState) =>
    state.reviewSorting.sortedBy;
