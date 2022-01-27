import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/actions';

const AddMovie = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setTitle(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addMovie({
      id: Math.random() * 1000000,
      title: title,
      price: 9,
    }))
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} value={title} type="text"/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddMovie;
