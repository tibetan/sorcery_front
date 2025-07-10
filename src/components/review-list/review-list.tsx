import React from 'react';

import './review-list.sass';
import { IReview } from "../../types/review";

interface ReviewListProps {
    reviews: IReview[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div className='review'>
      Review Section
    </div>
  );
}

export default ReviewList;