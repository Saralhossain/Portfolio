import React from "react";
import './Circle.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Circle =({years , txt1 , txt2})=>{
    const theme=useContext(themeContext);
    const darkMode =theme.state.darkMode;
    
    return (
        <div className='achievement'>
            <div className='circle' style={{color: darkMode? 'black' : ''}}>{years}</div>
            <span>{txt1}</span>
            <span>{txt2}</span>
        </div>
    )
}

export default Circle;