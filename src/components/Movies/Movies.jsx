import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/Api/MoviesApi';
import './Movies.css';

const Movies = ({ isLoggedIn, onSaveMovie, onDeleteMovie, savedMovies }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    moviesApi.getInitialMovies()
      .then(data => {
        setMoviesList(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleClickMovieButton = (movie) => {
    const savedMovie = savedMovies.find(item => item.movieId === movie.id);
    if (savedMovie) {
      onDeleteMovie(savedMovie._id);
      return;
    }
    onSaveMovie(movie);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Search />
        <MoviesCardList
          isSavedList={false}
          movies={moviesList}
          onClickMovieButton={handleClickMovieButton}
        />
      </main>
      <Footer />
    </>
  )
};

export default Movies;