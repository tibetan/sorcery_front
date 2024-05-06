import React from 'react';

import ReviewRating from '../review-rating/review-rating';

import './review-slide-item.sass';
import user_icon from '../../../../../images/user-icon.png';

const ReviewSlideItem = () => {
    return (
        <div className='review-slide-item'>
            <div className='review-slide-item-top'>
                <div className='review-slide-item-top-thumb'>
                    <img src={user_icon} alt='user_icon'/>
                </div>
                <div className='review-slide-item-top-meta'>
                    <div className='review-slide-item-top-meta-rating'>
                        <ReviewRating/>
                    </div>
                    <div className='review-slide-item-top-meta-info'>
                        <b className="review-slide-item-top-meta-info-name">
                            <span className="review-slide-item-top-meta-info-name-link">Aiden&nbsp;F.</span>
                        </b>
                        &nbsp;reviewed&nbsp;
                        <b href="#!" className="review-slide-item-top-meta-info-business"
                           aria-hidden="true" tabIndex="-1"
                        >
                            My Essay Geeks
                        </b>
                    </div>
                </div>
            </div>
            <div className='review-slide-item-bottom'>
                <h3 className='review-slide-item-bottom-title'>
                    Highly recommend!
                </h3>
                <div className='review-slide-item-bottom-body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnali qua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                </div>
            </div>
        </div>
    );
};

export default ReviewSlideItem;