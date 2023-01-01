import React from "react";
import Item from './Item'
import './ItemsList.css'


const ItemsList = (props) => {
   if(props.items.length == 0){
    return (<h2>No Items found</h2>)
   }

    return (
        <ul className='expenses-list'>
            {props.items.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  age={item.age}
                />
            ))};
        </ul>
    );
};

export default ItemsList;