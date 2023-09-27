import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css'

const MoviesCardList = ({ isSavedList, movies, onClickMovieButton, savedMovies }) => {
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
      setInitialCount(12);
      setStep(3);
    } else if (windowWidth >= 768) {
      setInitialCount(8);
      setStep(2);
    } else {
      setInitialCount(5);
      setStep(1);
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
      {showMoviesList.length > 0 ? (
        <ul className='movies-card-list__list list-reset'>
          {showMoviesList.map(movie => {
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
          })}
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