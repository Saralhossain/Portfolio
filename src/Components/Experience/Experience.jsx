import React from 'react';
import Circle  from '../Circle/Circle';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';



const Experience = () => {
  const theme=useContext(themeContext);
    const darkMode =theme.state.darkMode;
    
    return (
          <div className='experience' id='Experiences'>
            <Circle years='4+' txt1='Years' txt2='Experience'/>
            <Circle years='10+' txt1='Projects' txt2='Completed'/>
            <Circle years='3+' txt1='Companies' txt2='Work'/>   
          </div>
    )
}

export default Experience;