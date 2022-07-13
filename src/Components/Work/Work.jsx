import React from 'react';
import "./Work.css";
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
// import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import Malook from '../../img/malook.png';
import { motion } from 'framer-motion';

const Work = () =>{
    //  const transition ={duration :2 , type :'spring'};
   
    return ( 
        <div className='works'>
        {/* Left side */}
            <div className="awesome">
                <span>Work For All These</span>
                <span>Brand & Clients</span>
                <span>As a Software developer I am providing following services for my customers
                <br/>
                As a Software developer I am providing following
                <br/>
                As a Software developer I am providing following
                <br/>
                </span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}>
                </div>
            </div>
            {/* Right side */}
            <div className='w-right'>
                <motion.div
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5, type:'spring'}}                
                 className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={Upwork} alt=""/>
                    </div>
                    <div className='w-secCircle'>
                        <img src={Fiverr} alt=""/>
                    </div>
                    <div className='w-secCircle'>
                        <img src={Malook} style={{transform:'scale(0.3)'}} alt=""/>
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt=""/>
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt=""/>
                    </div>
                </motion.div>

                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
                <div className='w-backCircle greenCircle'></div>
                <div className='w-backCircle blackCircle'></div>
            
            </div>
        </div>
    )
}


export default Work;