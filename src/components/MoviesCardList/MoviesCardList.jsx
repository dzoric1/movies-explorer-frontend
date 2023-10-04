import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import {
  MOVIES_PER_PAGE_1280,
  MOVIES_PER_PAGE_768,
  MOVIES_PER_PAGE_320
} from '../../utils/constants/constants';
import './MoviesCardList.css'

const MoviesCardList = ({ isSavedList, movies, onClickMovieButton, savedMovies, isLoading }) => {
  const [showMoviesList, setShowMoviesList] = useState([]);
  const [initialCount, setInitialCount] = useState(Number);
  const [step, setStep] = useState(Number);
  const [page, setPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isSaved = (movie) => {
    if (!isSavedList) {
      const savedMovie = savedMovies.find(item => item.movieId === movie.id);
      return !!savedMovie;
    }
    return true;
  }

  useEffect(() => {
    if (windowWidth >= 1280) {
      setInitialCount(MOVIES_PER_PAGE_1280.initial);
      setStep(MOVIES_PER_PAGE_1280.step);
    } else if (windowWidth >= 768) {
      setInitialCount(MOVIES_PER_PAGE_768.initial);
      setStep(MOVIES_PER_PAGE_768.step);
    } else {
      setInitialCount(MOVIES_PER_PAGE_320.initial);
      setStep(MOVIES_PER_PAGE_320.step);
    }
  }, [windowWidth]);

  useEffect(() => {
    const callback = (e) => setWindowWidth(e.target.innerWidth);
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []);

  useEffect(() => {
    if (isSavedList) {
      setShowMoviesList(movies);
      return;
    }

    setShowMoviesList(movies.slice(0, initialCount + page * step));
  }, [initialCount, page, movies]);

  return (
    <section className='movies-card-list container'>
      {!isLoading ? (
        <ul className='movies-card-list__list list-reset'>
          {showMoviesList.length > 0 ? showMoviesList.map(movie => {
            return (
              <li className='movies-card-list__list-item' key={movie.id ?? movie.movieId}>
                <MoviesCard
                  data={movie}
                  isSavedList={isSavedList}
                  onClickMovieButton={() => onClickMovieButton(movie)}
                  isSaved={isSaved(movie)}
                />
              </li>
            )
          }) : <p className='movies-card-list__not-found'>Фильмы не найдены</p>}
        </ul>
      ) : <Preloader />}
      {isSavedList || showMoviesList.length === movies.length ? '' : (
        <button
          className="movies-card-list__btn hover-opacity"
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;