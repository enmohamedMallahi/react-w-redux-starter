import React from 'react';
import Movie from './Movie';
import { useSelector } from 'react-redux';

const MovieList = () => {
  const movies = useSelector((state) => state);

  movies.map(movie => console.log(movie.title))


  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
