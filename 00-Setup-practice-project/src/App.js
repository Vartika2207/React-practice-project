import { useState } from 'react';
import './App.css';
import InputForm from './components/Input/InputForm/InputForm';
import NewInput from './components/Input/NewInput/NewInput';
import Items from './components/Items/Items';

const DUMMY_ITEMS = [
  {
    id: 'id1',
    name: 'Manju'
  },
  {
    id: 'id2',
    name: 'Vikalp'
  }
];

const App = () => {

  const [items, setItems] = useState(DUMMY_ITEMS);
  
  const addItemHandler = () => {

  }

  return (
    <div className="App">
      <NewInput onAddItem={addItemHandler}/>
      <Items items={items}/>
    </div>  
  );
}

export default App;
