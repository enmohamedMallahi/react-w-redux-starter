import React from 'react';
import Navbar from './components/Navbar';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <MoviesList />
      <AddMovie />
    </>
  );
}
