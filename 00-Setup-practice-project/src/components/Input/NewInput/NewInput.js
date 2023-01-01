import React, {useState} from "react";
import './NewInput.css';
import InputForm from "../InputForm/InputForm";


const NewInput = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const onSaveItemHandler = (enterdItemData) => {
        const itemData = {
            ...enterdItemData,
            id: Math.random().toString()
        };
        props.onAddItem(itemData);
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onChange={startEditingHandler}>Enter Items</button>}
            {isEditing && 
               <InputForm
                  onSaveItemData={onSaveItemHandler}
               />   
            }
        </div>
    );
};

export default NewInput;