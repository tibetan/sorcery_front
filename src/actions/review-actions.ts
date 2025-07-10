import { createAsyncThunk } from '@reduxjs/toolkit';

import { IReview, IReviewListProps } from '../types/review';
import { TError } from '../types/error';

type FetchReviewsArgs = {
    apiService: IReviewListProps['apiService'];
};

export const fetchReviews = createAsyncThunk<
    IReview[],                // что возвращаем
    FetchReviewsArgs,         // что передаём
    { rejectValue: TError }   // если ошибка
    >(
    'reviews/fetch',
    async ({ apiService }, { rejectWithValue }) => {
        try {
            return await apiService.getReviews();
        } catch (err) {
            return rejectWithValue(new Error((err as Error).message));
        }
    }
);
