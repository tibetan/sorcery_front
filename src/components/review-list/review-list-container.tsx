import React from 'react';
import { useSelector } from "react-redux";
import { selectSortedReviews } from '../../selectors/reviews';
import ReviewList from './review-list';
import Spinner from "../spinner/spinner";
import { ApiService } from '../../services/api';

const ReviewListContainer = () => {
    const { useGetReviewsQuery } = ApiService;

    // RTK Query автоматически диспатчит запрос и обновляет store
    const { data: reviewsData, isLoading, error } = useGetReviewsQuery();

    const reviews = useSelector(selectSortedReviews);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading reviews: {JSON.stringify(error)}</div>;
    // if (error) return <div>Error loading reviews</div>;

    return <ReviewList reviews={reviews.length ? reviews : reviewsData || []} />;
};

export default ReviewListContainer;
