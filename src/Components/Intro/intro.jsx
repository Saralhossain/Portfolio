import React from "react";
import './intro.css';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion';


const Intro = () =>{
    const transition ={duration :2 , type :'spring'};
    return (
        <div className="intro" id="Home">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Alamdar Hussain</span>
                    <span>Frontend Developer with high
                    level of experience in web designing and development.
                    producting the quality work</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                   <a href="https://github.com/Saralhossain"><img src={Github} alt="github"/></a> 
                   <a href="https://www.linkedin.com/in/saral-hossain/"><img src={LinkedIn} alt="linkedin"/></a> 
                   <a href="https://www.instagram.com/xrlh0s/"><img src={Instagram} alt="instagram"/></a> 
                </div>
            </div>
            <div className="i-right">
               <img src={Vector1} alt="" />
               <img src={Vector2} alt="" />
               <img src={boy} alt="" /> 
               <motion.img
               initial={{left:'-36%'}}
               whileInView={{left:'-24%'}}
               transition={transition}
                src={glassesimoji} alt=""/>
               <div style={{top: '-4%' , left:'68%'}}> 
                    <FloatingDiv image={Crown} txt1='React' txt2='Developer' />
               </div>
               <div style={{top: '62%', left: '5%'}}>
                <FloatingDiv image={thumbup} txt1= 'Best Design' txt2='Award' />
               </div>
               <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
               <div className="blur" 
                style={
                    {
                        background:'#C1F5FF', 
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-5rem'    
                    }
                }
               ></div>
            </div>
        </div>
    )

}

export default Intro;