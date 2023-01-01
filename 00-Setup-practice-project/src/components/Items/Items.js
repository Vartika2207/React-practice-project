import React from "react";
import './Items.css';
import ItemList from "./ItemsList";
import Card from 'C:\Users\vshakya\Desktop\Learning\React-practice-project\practice-project\src\components\Input\UI\Card.js';

const Items = (props) => {

    return (
        <div>
            <Card className="expenses">
                <ItemList items={props.items }/>
            </Card>
        </div>
    );
}

export default Items;