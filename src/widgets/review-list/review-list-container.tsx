import React from 'react';
import { useAppSelector } from '@/app/providers/store/hooks';
import { selectSortedReviews } from '@/entities/review/model/selectors';
import ReviewList from './review-list';
import Spinner from '@/shared/ui/spinner';
import ErrorIndicator from '@/shared/ui/error-indicator';
import { reviewApi } from '@/entities/review/api/review-api';

const ReviewListContainer: React.FC = () => {
    const { data: reviews, isLoading, error } = reviewApi.useGetReviewsQuery();
    const sortedReviews = useAppSelector(selectSortedReviews);

    if (isLoading) return <Spinner />;
    if (error) return <ErrorIndicator />;

    return <ReviewList reviews={sortedReviews} />;
};

export default ReviewListContainer;
