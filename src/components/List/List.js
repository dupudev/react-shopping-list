import React from 'react';

const List = ({ list, setList }) => {
  const removeItem = (idx) => {
    let tempList = [...list];
    tempList.splice(idx, 1);
    setList(tempList);
  };

  const clearList = () => {
    setList([]);
  };

  const itemChecked = (idx) => {
    list[idx].isChecked == false
      ? (list[idx].isChecked = true)
      : (list[idx].isChecked = false);

    setList([...list]);
  };

  return (
    <div className='px-3'>
      <table className='table table-striped text-center bg-light rounded-4'>
        <thead>
          <tr className=''>
            <th scope='col'>#</th>
            <th scope='col'>Check</th>
            <th scope='col'>Items</th>
            <th scope='col'>Qty</th>
            <th scope='col'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => {
            return (
              <tr key={idx}>
                <th style={{ width: '80px' }} className='pt-3' scope='row'>
                  {idx + 1}
                </th>
                <td style={{ width: '50px' }} className='pt-2'>
                  <input
                    style={{ width: '30px', height: '30px' }}
                    className='form-check-input'
                    type='checkbox'
                    checked={item.isChecked}
                    onChange={() => itemChecked(idx)}
                  />
                </td>
                {item.isChecked == false ? (
                  <td className='pt-3'>{item.item}</td>
                ) : (
                  <td className='pt-3 fst-italic text-muted text-decoration-line-through'>
                    {item.item}
                  </td>
                )}
                <td className='pt-3'>{item.qty}</td>
                <td style={{ width: '120px' }}>
                  <button
                    className='btn btn-danger'
                    onClick={() => removeItem(idx)}
                  >
                    <i className='bi bi-trash'></i>
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className='btn btn-danger' onClick={clearList}>
                Clear
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
