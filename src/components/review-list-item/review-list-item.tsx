import React from 'react';

import { IReview } from "../../types/review";

import './review-list-item.sass';

interface ReviewListProps {
    review: IReview;
}

const ReviewListItem = ({ review }: ReviewListProps) => {
    const { id, user, product, rating, description } = review;
    return (
        <div className='review-list-item'>
            <div>id: {id}</div>
            <div>User email: {user?.email}</div>
            <div>Product name: {product?.name}</div>
            <div>Rating: {rating}</div>
            <div>Description: {description}</div>
        </div>
    );
}

export default ReviewListItem;