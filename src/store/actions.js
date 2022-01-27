export const addMovie = (newMovie) => {
  return {
    type: 'ADD_MOVIE',
    newMovie: newMovie,
  };
};

export const deleteMovie = (movieId) => {
  return {
    type: 'DELETE_MOVIE',
    movieId: movieId,
  };
};
