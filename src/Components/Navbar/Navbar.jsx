import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import logo from '../../img/logo.jpeg';



const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    <img src={logo} alt="" className='logo' />
                </div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                            <li className='nbar-buttons'>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                            <li className='nbar-buttons'>Services</li>
                        </Link>
                        <Link spy={true} to='Experiences' smooth={true} activeClass='activeClass'>
                            <li className='nbar-buttons'>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                            <li className='nbar-buttons'>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                            <li className='nbar-buttons'>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className='button n-button' >Contact</button>
                </Link>
            </div>
        </div>
    )
}


export default Navbar;