import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/zoom';
import './new.sass';

const New = () => {
  return (
    <div className='new'>
        <div className='title'>
            Explore New Arrivals
        </div>
        <Swiper
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{
                delay: 4000,
                reverseDirection: true
            }}
            loop={true}
            zoom={true}
            modules={[Autoplay, Zoom]}
            className="mySwiper"
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default New;
