import React from 'react';
import './review-list.sass';
import { IReview } from "../../types/review";
import ReviewListItem from "../review-list-item/review-list-item";
import { useReviewActions } from "../../actions/reviews";

interface ReviewListProps {
    reviews: IReview[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
    const { setSortBy } = useReviewActions();
    return (
        <div className='review-list'>
          Reviews Section:
            <div>
                <button onClick={() => setSortBy('author')}>Сортировать по автору</button>
                <button onClick={() => setSortBy('date')}>По дате</button>
                <button onClick={() => setSortBy('rating')}>По рейтингу</button>
                <button onClick={() => setSortBy(null)}>Сбросить</button>
            </div>
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