import React from 'react';
import "./Portfolio.css";
import {Swiper , SwiperSlide} from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';

const Portfolio = () =>{

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
                    <img src={Sidebar} alt='' />
                </SwiperSlide>
                <SwiperSlide className='swipe-slider'>
                    <img src={Ecommerce} alt='' />
                </SwiperSlide>
                <SwiperSlide className='swipe-slider'>
                    <img src={HOC} alt='' />
                </SwiperSlide>
                <SwiperSlide className='swipe-slider'>
                    <img src={MusicApp} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )

}

export default Portfolio;