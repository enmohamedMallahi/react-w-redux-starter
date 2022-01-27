import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import action from '../store/actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  // console.log(counter);

  return (
    <div className="counter">
      <button onClick={() => dispatch({ type: action.increment })}>
        Increment
      </button>
      <span>{JSON.stringify(count)}</span>
      <button onClick={() => dispatch({ type: action.decrement })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: action.reset })}>Reset</button>
    </div>
  );
};

export default Counter;
