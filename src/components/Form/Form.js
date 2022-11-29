import React, { useRef } from 'react';

const Form = ({ item, setItem, qty, setQty, setList }) => {
  const inputItem = useRef();

  const addItem = (event) => {
    event.preventDefault();

    let newItem = {
      item: item,
      qty: qty,
      isChecked: false,
    };

    setList((prev) => [...prev, newItem]);

    setItem('');
    setQty('');

    inputItem.current.focus();
  };

  return (
    <div className='mb-5'>
      <form
        className='d-flex align-items-center justify-content-center'
        onSubmit={addItem}
      >
        <div className='mb-3'>
          <label className='form-label fw-bold'>Item:</label>
          <input
            ref={inputItem}
            className='form-control'
            type='text'
            placeholder='Beer'
            required
            value={item}
            onChange={(event) => {
              setItem(event.target.value);
            }}
          />
        </div>
        <div className='mb-3 ms-3'>
          <label className='form-label fw-bold'>Quantity:</label>
          <input
            className='form-control'
            type='text'
            placeholder='6 cans'
            value={qty}
            onChange={(event) => {
              setQty(event.target.value);
            }}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3 ms-3'>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Form;
