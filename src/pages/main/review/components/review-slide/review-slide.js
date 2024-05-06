import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ReviewSlideItem from '../review-slide-item/review-slide-item';

import './review-slide.sass';

const ReviewSlide = () => {
    return (
        <div className='review-slide'>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={50}
                autoplay={{
                    delay: 4000,
                }}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ReviewSlideItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewSlideItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewSlideItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewSlideItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewSlideItem/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ReviewSlide;