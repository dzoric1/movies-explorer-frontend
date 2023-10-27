import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import movieFilter from '../../utils/movieFilter';
import './SavedMovies.css';

const SavedMovies = ({
  isLoggedIn,
  savedMovies,
  onDeleteMovie,
  isLoadingSavedMovies
}) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isShorts, setIsShorts] = useState(false);

  const handleIsShorts = () => {
    setIsShorts(!isShorts);
  };

  const handleClickMovieButton = (movie) => {
    onDeleteMovie(movie._id);
  }

  const handleChangeSearchInputValue = (value) => {
    setSearchInputValue(value);
    setFilteredMovies(movieFilter(savedMovies, value, isShorts));
  }

  useEffect(() => {
    setFilteredMovies(movieFilter(savedMovies, searchInputValue, isShorts))
  }, [savedMovies, isShorts])

  return (
    <>
      <Header isAuth={true} isLoggedIn={isLoggedIn} />
      <main>
        <Search
          searchInputValue={searchInputValue}
          onChangeSearchInputValue={handleChangeSearchInputValue}
          isShorts={isShorts}
          onChangeShortsChexbox={handleIsShorts}
        />
        <MoviesCardList
          isSavedList={true}
          movies={filteredMovies}
          onClickMovieButton={handleClickMovieButton}
          isLoading={isLoadingSavedMovies}
        />
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;