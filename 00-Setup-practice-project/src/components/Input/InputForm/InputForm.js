import React, { useState } from 'react';
import './InputForm.css'

const InputForm = (props) => {

    const [eneteredName, setEnteredName] = useState('');
    const [eneteredAge, setEnteredAge] = useState('');

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const itemData = {
            name: eneteredName,
            age: eneteredAge
        };
        console.log('input.js> itemData ' + itemData);
        props.onSaveItemData(itemData);
        setEnteredName('');
        setEnteredAge('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>User Name</label>
                    <input 
                       type='text' 
                       onChange={nameChangeHandler}
                       value={eneteredName} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Age</label>
                    <input 
                       type='number' 
                       onChange={ageChangeHandler}
                       value={eneteredAge}
                    />
                </div>
                
            </div>
            <div>
                <button type='submit' className="new-expense__actions">Add User</button>
            </div>
        </form>
    );
}


export default InputForm;