import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css'

const MoviesCardList = () => {
  return (
    <section className='movies-card-list container'>
      <ul className='movies-card-list__list list-reset'>
        <li className='movies-card-list__list-item'>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li >
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
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