import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { Draft } from 'immer';

import { fetchReviews } from '../actions/review-actions';

import { IReview } from '../types/review';
import { TError } from '../types/error';

// Определяем тип для состояния
interface ReviewState {
    reviews: IReview[];
    loading: boolean;
    error: TError;
}

// Начальное состояние
const initialState: ReviewState = {
    reviews: [],
    loading: true,
    error: null
};

export const reviewSlice = createSlice<
    ReviewState,
    SliceCaseReducers<ReviewState>,
    'reviews',
    {}
    >({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchReviews.pending, (state: Draft<ReviewState>) => {
            state.reviews = [];
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchReviews.fulfilled, (state: Draft<ReviewState>, action) => {
            state.reviews = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchReviews.rejected, (state: Draft<ReviewState>, action) => {
            state.reviews = [];
            state.loading = false;
            state.error = action.payload ?? new Error('Unknown reviews error');
        });
    }
});

export default reviewSlice.reducer;
