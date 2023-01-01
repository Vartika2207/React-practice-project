import React, {useState} from "react";
import Item from "./Item.css"
import Card from './UI/Card'


const Item = (props) => {

    return (
        <li>
            <Card className='expense-item'> 
                <div className='expense-item__description'>
                    <h2>{props.name}</h2>
                    <div  className='expense-item__price'>{props.age}</div>
                </div>
            </Card>
        </li>
    );
};

export default Item;