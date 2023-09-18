import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import moviesTestDB from '../../utils/moviesTestDB'
import './MoviesCardList.css'

const MoviesCardList = ({ isSavedList }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    setMoviesList(moviesTestDB)
  }, [])


  return (
    <section className='movies-card-list container'>
      <ul className='movies-card-list__list list-reset'>
        {moviesList.length > 0 ? moviesList.map(movie => {
          return (
            <li className='movies-card-list__list-item' key={movie.movieId}>
              <MoviesCard
                data={movie}
                isSavedList={isSavedList}
              />
            </li>
          )
        }) : <p className='movies-card-list__placeholder'>Фильмы не найдены</p>}
      </ul>
      <button
        className="movies-card-list__btn hover-opacity"
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;