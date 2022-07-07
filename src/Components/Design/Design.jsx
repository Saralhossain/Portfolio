import React from "react";
import './Design.css';

const Design = ({image , heading , detail}) => {
    return (
        <div className="card">
                <img src={image} alt="" />
                <span>{heading}</span>
                <span>{detail}</span>
                <button className="c-button">LEARN MORE</button>    
        </div>
    )
}


export default Design;
