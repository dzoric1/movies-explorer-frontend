import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/Api/MoviesApi';
import movieFilter from '../../utils/movieFilter';
import './Movies.css';

const Movies = ({ isLoggedIn, onSaveMovie, onDeleteMovie, savedMovies }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isShorts, setIsShorts] = useState(false);

  useEffect(() => {
    moviesApi.getInitialMovies()
      .then(data => {
        setMoviesList(data);
        setFilteredMovies(movieFilter(data, searchInputValue, isShorts));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredMovies(movieFilter(moviesList, searchInputValue, isShorts));
  }, [isShorts])

  const handleClickMovieButton = (movie) => {
    const savedMovie = savedMovies.find(item => item.movieId === movie.id);
    if (savedMovie) {
      onDeleteMovie(savedMovie._id);
      return;
    }
    onSaveMovie(movie);
  };

  const handleChangeSearchInputValue = (value) => {
    setSearchInputValue(value);
    setFilteredMovies(movieFilter(moviesList, value, isShorts));
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Search
          searchInputValue={searchInputValue}
          onChangeSearchInputValue={handleChangeSearchInputValue}
          isShorts={isShorts}
          onChangeShortsChexbox={() => setIsShorts(!isShorts)}
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