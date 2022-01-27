export const addMovie = (newMovie) => {
  return {
    type: 'ADD_MOVIE',
    newMovie: newMovie,
  };
};
