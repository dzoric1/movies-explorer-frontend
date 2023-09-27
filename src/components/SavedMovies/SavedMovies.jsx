import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/Api/MainApi';
import './SavedMovies.css';

const SavedMovies = ({ isLoggedIn }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    mainApi.getFavoritesMovies()
      .then(data => {
        setMoviesList(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header isAuth={true} isLoggedIn={isLoggedIn} />
      <main>
        <Search />
        <MoviesCardList isSavedList={true} movies={moviesList} />
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;