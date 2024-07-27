import React from "react";
import "./styles/card.css";


function Card({title, image}) {
    return(
        <div className="card">
            <img className='cardImage' src={image} />
            <h4>{title}</h4>
        </div>
    )
}


export default Card