import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Dashboard from "../../img/dashboard.jpeg";
import Portal from "../../img/portal.jpeg";
import 'swiper/css';

const Portfolio = () => {

    return (
        <div className='portfolio' id='Portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide className='swipe-slider'>
                    <img src={Portal} alt='' />
                </SwiperSlide>
                <SwiperSlide className='swipe-slider'>
                    <img src={Dashboard} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )

}

export default Portfolio;