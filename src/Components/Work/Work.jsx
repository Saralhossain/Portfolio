import React from 'react';
import "./Work.css";
import Fiverr from '../../img/fiverr.png';
import Facebook from '../../img/Facebook.png';
import Malook from '../../img/malook.png';
import devJunction from '../../img/devjunction.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Freelancer from '../../img/freelancer.png';


const Work = () => {
    //  const transition ={duration :2 , type :'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'>
            {/* Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Work For All These</span>
                <span>Brand & Clients</span>
                <span className='Description'>
                    As a web developer I have served my services for this companies, since last 4years.
                    <br />
                    I have directly discuss about project with client, So I clearly understand
                    <br />
                    what are requirements, what my client actually wants.
                    <br />
                </span>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className="button s-button" >Hire Me</button></Link>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}>
                </div>
            </div>
            {/* Right side */}
            <div className='w-right'>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <a href='https://devjunction.io/' ><img src={devJunction} alt="" className='w-images' /></a>
                    </div>
                    <div className='w-secCircle'>
                        <a href='https://www.fiverr.com/'><img src={Fiverr} alt="" className='w-images' /></a>
                    </div>
                    <div className='w-secCircle'>
                        <a href='http://malookenterprises.com/'><img src={Malook} alt="" className='w-images' /></a>
                    </div>
                    <div className='w-secCircle'>
                        <a href='https://www.freelancer.com/' ><img src={Freelancer} alt="" className='w-images' /></a>
                    </div>
                    <div className='w-secCircle'>
                        <a href='https://www.facebook.com/'><img src={Facebook} alt="" className='w-images' /></a>
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