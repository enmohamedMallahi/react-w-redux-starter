import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/actions';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break
      case 'price':
        setPrice(e.target.value);
        break
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.lenght !== 0 && price !== 0) {
      dispatch(
        addMovie({
          id: Math.random() * 1000000,
          title: title,
          price: price,
        })
      );
      setTitle('');
      setPrice(0)
    } else {
      setAlert('All informations are required and price can not be zero.')
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Movie title:</label>
          <input
            onChange={changeHandler}
            name="title"
            value={title}
            type="text"
          />
        </div>
        <div>
          <label>Movie price:</label>
          <input
            onChange={changeHandler}
            name="price"
            value={price}
            type="number"
          />
        </div>
        <div className='alert'>{alert}</div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddMovie;
