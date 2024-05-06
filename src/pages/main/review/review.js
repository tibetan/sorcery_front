import React from 'react';

import ReviewSlide from './components/review-slide/review-slide';

import './review.sass';

const Review = () => {
  return (
    <div className='review'>
        <div className='title'>
            Browse reviews from our users
        </div>
        <ReviewSlide/>
    </div>
  );
};

export default Review;
