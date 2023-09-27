import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

const SavedMovies = ({ isLoggedIn, savedMovies, onDeleteMovie }) => {

  const handleClickMovieButton = (movie) => {
    onDeleteMovie(movie._id);
  }

  return (
    <>
      <Header isAuth={true} isLoggedIn={isLoggedIn} />
      <main>
        <Search />
        <MoviesCardList isSavedList={true} movies={savedMovies} onClickMovieButton={handleClickMovieButton} />
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;