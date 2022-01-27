import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <span>MoviesBox</span>
      <ul>
        <li>Number of movies: ({2})</li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
