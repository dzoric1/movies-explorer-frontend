import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/Api/MoviesApi';
import movieFilter from '../../utils/movieFilter';
import './Movies.css';

const Movies = ({ isLoggedIn, onSaveMovie, onDeleteMovie, savedMovies }) => {
  const savedIsShorts = JSON.parse(localStorage.getItem('isShorts')) ?? false;
  const savedSearchValue = JSON.parse(localStorage.getItem('searchValue')) ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState(savedSearchValue);
  const [isShorts, setIsShorts] = useState(savedIsShorts);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  useEffect(() => {
    setIsLoadingMovies(true);
    moviesApi.getInitialMovies()
      .then(data => {
        setMoviesList(data);
        setFilteredMovies(movieFilter(data, searchInputValue, isShorts));
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoadingMovies(false))
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

  const handleIsShorts = () => {
    setIsShorts(!isShorts);
    localStorage.setItem('isShorts', JSON.stringify(!isShorts));
  };

  const handleChangeSearchInputValue = (value) => {
    setSearchInputValue(value);
    localStorage.setItem('searchValue', JSON.stringify(value));
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
          onChangeShortsChexbox={handleIsShorts}
        />
        <MoviesCardList
          isSavedList={false}
          movies={filteredMovies}
          onClickMovieButton={handleClickMovieButton}
          savedMovies={savedMovies}
          isLoading={isLoadingMovies}
        />
      </main>
      <Footer />
    </>
  )
};

export default Movies;