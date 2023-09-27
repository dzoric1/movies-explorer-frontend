import { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ data, isSavedList, onClickMovieButton, isSaved }) => {
  const { nameRU, duration, image, trailerLink } = data;
  // const [isSaved, setIsSaved] = useState(false);

  const handleButtonClick = () => {
    // setIsSaved(!isSaved)
    onClickMovieButton()
  };


  return (
    <div className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>{nameRU}</h2>
        <p className='movies-card__duration'>{duration} минут</p>
      </div>
      <a
        className='movies-card__image-wrapper'
        href={trailerLink} target='_blank'
        rel="noreferrer"
      >
        <img
          className='movies-card__image'
          src={!isSavedList ? `https://api.nomoreparties.co/${image.url}` : image}
          alt={nameRU} />
      </a>
      <div className='movies-card__footer'>
        <button
          onClick={handleButtonClick}
          type='button'
          className={
            `movies-card__footer-button hover-opacity
            ${isSaved && !isSavedList ? 'movies-card__footer-button_type_red' : ''}`}
        >
          {isSavedList ? 'x' : !isSaved ? 'Сохранить' : '✓'}
        </button>
      </div>
    </div>
  );
}

export default MoviesCard;