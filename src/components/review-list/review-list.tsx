import React from 'react';

import './review-list.sass';

import { IReview } from "../../types/review";
import ReviewListItem from "../review-list-item/review-list-item";

interface ReviewListProps {
    reviews: IReview[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
      <div className='review-list'>
          Reviews Section:
          <ul>
              {
                  reviews.map((review: IReview) => {
                      return (
                          <li key={review.id}>
                              <ReviewListItem review={review} />
                          </li>
                      );
                  })
              }
          </ul>
      </div>
  );
}

export default ReviewList;