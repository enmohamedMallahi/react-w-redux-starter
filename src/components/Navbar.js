import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const movies = useSelector(state => state)

  return (
    <nav>
      <span>MoviesBox</span>
      <ul>
        <li>Number of movies: ({movies.length})</li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
