import React from 'react';

import { Review } from '@/entities/review/model/types';

import './review-list-item.sass';

interface ReviewListProps {
    review: Review;
}

const ReviewListItem = ({ review }: ReviewListProps) => {
    const { id, user, product, rating, description } = review;
    return (
        <div className='review-list-item'>
            <div>id: {id}</div>
            <div>User name: {user?.name}</div>
            <div>Product name: {product?.name}</div>
            <div>Rating: {rating}</div>
            <div>Description: {description}</div>
        </div>
    );
}

export default ReviewListItem;