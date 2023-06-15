import React from 'react';
import "./Testimonial.css";
import {Swiper , SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/hadi.jpeg";
import profilePic2 from "../../img/zainu.jpg";
import profilePic3 from "../../img/maxii.jpg";
import profilePic4 from "../../img/aleem.jpg";
import profilePic5 from "../../img/devjunction.png";
import {Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
    const clients = [   
        {
            img: profilePic5,
            review:" “Alamdar's frontend expertise and seamless backend integration greatly improved the user experience in 'KWK-chat.' His contributions in interactive maps, post display, user search, and nearby user integration were invaluable.” ",
        },
        {img: profilePic1,
            review:" “Thanks to your willingness to take risks and learn from mistakes, we solved a problem that could have cost the company a lot in the long run. Great work!” ",
        },
        {
            img: profilePic2,
            review:" “Your willingness to look outside of yourself and make those around you better is one of the most valuable contributions you’re making. Thank you.”",
        },
        {
            img: profilePic3,
            review:" “It can be tough relating to your former peers after a promotion. You’re doing a good job of navigating your new role and new responsibilities.” ",
        },
        {
            img: profilePic4,
            review:" “Your time management has really turned around since last quarter. I’m really impressed with your growth, and I hope you can see it too. How can I help you continue to succeed?” ",
        }
    ]
    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className='t-heading'>
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>From me...</span>
                <div className='blur t-blur1' style={{background:'var(--purple)'}}></div>
                <div className='blur t-blur2' style={{background:'skyblue'}}></div>
            </div>
            {/* Slider */}
             <Swiper
             modules={[Pagination]}
             slidesPerView={1}
             pagination={{clickable: true}}
             >
                {clients.map((client , index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className='testimonial'>
                                <img src={client.img} alt='' />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}

             </Swiper>   


        </div>
    )
}


export default Testimonial;