import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../store/actions';

const Movie = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie">
      <h3>{movie.title}</h3>
      <strong>{movie.price}$</strong>
      <br />
      <button onClick={(e) => dispatch(deleteMovie(movie.id))} className="btn">
        delete
      </button>
    </div>
  );
};

export default Movie;
