import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Design from "../Design/Design";
import Resume from './MyResume.pdf';
import {motion} from 'framer-motion';
import { themeContext } from '../../Context';
import { useContext } from 'react';



const Services = () =>{
    const theme=useContext(themeContext);
    const darkMode =theme.state.darkMode;
    const transition ={duration: 2 , type: 'spring'}
    return (
        <div className="services" id="Services">
            {/* Left side */}
            <div className="awesome">
                <span style={{color : darkMode? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span>As a Software developer I am providing following services for my customers</span>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}>
                </div>
            </div>
            {/* Right Side */}
            <div className="cards" >
                <motion.div
                whileInView={{left:'14rem'}}
                initial={{left:'25rem'}}
                transition={transition}
                 style={{left:'14rem'}}>
                    <Design image={HeartEmoji} heading={'Design'} detail={"Figma , Sketch , photoshop , Adobe"} />
                </motion.div>
                <motion.div
                whileInView={{left:'-4rem' , top:'12rem'}}
                initial={{left:'-12rem'}}
                transition={transition}
                
                 style={{left:'-4rem' , top:'12rem'}}>
                    <Design image={Glasses} heading={'Developer'} detail={"Html , Css , Javascript , React"} />
                </motion.div>
                <motion.div
                whileInView={{left: '12rem' , top:'19rem'}}
                initial={{left:'25rem'}}
                transition={transition}
                 style={{left:'12rem' , top:'19rem'}}>
                    <Design image={Humble} heading={'UI/UX'} detail={"Craft , Axure , Proto.io , Figma"} />
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>

    )
}

export default Services;