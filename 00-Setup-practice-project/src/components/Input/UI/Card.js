import React from "react";
import './Card.css'

const Card = (props) => {
    const classes = 'card' + props.className;
    
    return (
        <div className={classes}>{props.childern}</div>
    );
}

export default Card;