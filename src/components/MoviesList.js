import React from 'react'
import Movie from './Movie'
import {useSelector} from 'react-redux'

const MovieList = () => {
  const movies = useSelector(state => state)

  console.log(movies)

  return (
    {movies.map(movie => (
      <Movie movie={movie} />
    ))}
  )
}

export default MovieList