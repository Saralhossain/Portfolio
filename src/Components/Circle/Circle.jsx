import React from "react";
import './Circle.css';

const Circle =({years , txt1 , txt2})=>{
    return (
        <div className='achievement'>
            <div className='circle'>{years}</div>
            <span>{txt1}</span>
            <span>{txt2}</span>
        </div>
    )
}

export default Circle;