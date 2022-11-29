import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';

const App = () => {
  const [item, setItem] = useState('');
  const [qty, setQty] = useState('');

  const [list, setList] = useState([
    {
      item: 'Milk',
      qty: '2l',
      isChecked: false,
    },
    {
      item: 'Potatoes',
      qty: '1kg',
      isChecked: false,
    },
    {
      item: 'Eggs',
      qty: '10',
      isChecked: false,
    },
  ]);

  return (
    <div className='main d-flex align-items-center justify-content-start flex-column'>
      <div className='app container col-md-9 col-xl-6 rounded-3 p-5'>
        <Form
          item={item}
          setItem={setItem}
          qty={qty}
          setQty={setQty}
          setList={setList}
        />
        <List list={list} setList={setList} />
      </div>
    </div>
  );
};

export default App;
