import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewSortingState } from './types';

const initialState: ReviewSortingState = {
    sortedBy: null,
};

export const reviewSortingSlice = createSlice({
    name: 'reviewSorting',
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<ReviewSortingState['sortedBy']>) {
            state.sortedBy = action.payload;
        },
        resetSort() {
            return initialState;
        },
    },
});

export const { setSortBy, resetSort } = reviewSortingSlice.actions;
export default reviewSortingSlice.reducer;

