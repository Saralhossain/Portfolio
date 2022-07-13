import React from 'react';
import './Footer.css';
import Wave from "../../img/wave.png";
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () =>{
        return (
            <div className='footer'>
                <img src={Wave} alt='' style={{width:'100%'}} />
                <div className='f-content'>
                    <span>Alamdar.hussain0007@gmail.com</span>
                    <div className='f-icons'>
                        <a href='https://www.instagram.com/xrlh0s/'><Instagram color='white'  size='3rem' /></a>
                        <a href='https://www.facebook.com/SaralH0ssain/'><Facebook color='white'  size='3rem' /></a>
                        <a href='https://github.com/Saralhossain'><Github color='white'  size='3rem' /></a>
                    </div>
                </div>
            </div>
        )
    }

export default Footer;