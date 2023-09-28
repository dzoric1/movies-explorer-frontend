import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/Api/MoviesApi';
import './Movies.css';

const Movies = ({ isLoggedIn, onSaveMovie, onDeleteMovie, savedMovies }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    moviesApi.getInitialMovies()
      .then(data => {
        setMoviesList(data);
        setFilteredMovies(data, searchInputValue);
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

  const handleFilterMovies = (movies, value) => {
    const filteredMovies = movies.filter(({ nameRU, nameEN }) => {
      return nameRU.toLowerCase().includes(value.toLowerCase()) || nameEN.toLowerCase().includes(value.toLowerCase())
    })
    return filteredMovies
  }

  const handleChangeSearchInputValue = (value) => {
    setSearchInputValue(value);
    setFilteredMovies(handleFilterMovies(moviesList, value));
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Search
          searchInputValue={searchInputValue}
          onChangeSearchInputValue={handleChangeSearchInputValue}
        />
        <MoviesCardList
          isSavedList={false}
          movies={filteredMovies}
          onClickMovieButton={handleClickMovieButton}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  )
};

export default Movies;