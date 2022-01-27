import { createStore } from 'redux';
import actions from './actions';

const initialState = [
  {
    id: 86899898,
    title: 'Spide-man: no way home',
    price: 9,
  },
  {
    id: 6766879,
    title: 'Venom: let there be a carnage',
    price: 9,
  },
];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.newMovie];
    case 'DELETE_MOVIE':
      return state;
    default:
      return state;
  }
};

const store = createStore(
  moviesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log('counter', store.getState().counter);
});

export default store;
