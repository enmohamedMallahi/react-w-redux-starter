import React from 'react';

const Movie = ({movie}) => {
  return (
    <div className='movie'>
      <h3>{movie.title}</h3>
      <strong>{movie.price}$</strong>
    </div>
  );
};

export default Movie;
