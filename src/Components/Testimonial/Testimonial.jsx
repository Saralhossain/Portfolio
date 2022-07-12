import React from 'react';
import "./Testimonial.css";
import {Swiper , SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/hadi.jpeg";
import profilePic2 from "../../img/zainu.jpg";
import profilePic3 from "../../img/maxii.jpg";
import profilePic4 from "../../img/aleem.jpg";
import {Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
    const clients = [
        {img: profilePic1,
            review:"Tum sa mil k dil ka jou hal kya kahain hogia ha mera bahal kya kahy",
        },
        {
            img: profilePic2,
            review:"Tum sa mil k dil ka jou hal kya kahain hogia ha mera bahal kya kahy",
        },
        {
            img: profilePic3,
            review:"Tum sa mil k dil ka jou hal kya kahain hogia ha mera bahal kya kahy",
        },
        {
            img: profilePic4,
            review:"Tum sa mil k dil ka jou hal kya kahain hogia ha mera bahal kya kahy",
        }
    ]
    return (
        <div className='t-wrapper'>
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