import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReviewState {
    sortedBy: 'author' | 'date' | 'rating' | null;
}

const initialState: ReviewState = {
    sortedBy: null,
};

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        setSortBy: (state, action: PayloadAction<'author' | 'date' | 'rating' | null>) => {
            state.sortedBy = action.payload;
        },
    },
});

export const { setSortBy } = reviewSlice.actions;
export default reviewSlice.reducer;
