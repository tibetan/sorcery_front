import React from 'react';
import ReviewListItem from './review-list-item/review-list-item';
import { useAppDispatch, useAppSelector } from '@/app/providers/store/hooks';
import { setSortBy } from '@/features/review-sorting/model/slice';
import { selectReviewSortBy } from '@/features/review-sorting/model/selectors';
import { Review } from '@/entities/review/model/types';
import './review-list.sass';

interface ReviewListProps {
    reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
    const dispatch = useAppDispatch();
    const sortBy = useAppSelector(selectReviewSortBy);

    // Простейшая сортировка на клиенте
    const sortedReviews = React.useMemo(() => {
        if (!sortBy) return reviews;
        return [...reviews].sort((a, b) => {
            switch (sortBy) {
                case 'author':
                    return (a.user?.name ?? '').localeCompare(b.user?.name ?? '');
                case 'date':
                    return new Date(b.createdAt ?? '').getTime() - new Date(a.createdAt ?? '').getTime();
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
    }, [reviews, sortBy]);

    return (
        <div className='review-list'>
            <div className='review-list__controls'>
                <button onClick={() => dispatch(setSortBy('author'))}>Сортировать по автору</button>
                <button onClick={() => dispatch(setSortBy('date'))}>По дате</button>
                <button onClick={() => dispatch(setSortBy('rating'))}>По рейтингу</button>
                <button onClick={() => dispatch(setSortBy(null))}>Сбросить</button>
            </div>
            <ul>
                {sortedReviews.map((review) => (
                    <li key={review.id}>
                        <ReviewListItem review={review} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
