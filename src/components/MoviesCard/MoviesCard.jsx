import './MoviesCard.css'
import img from '../../assets/images/card.jpg'

const MoviesCard = () => {
  return (
    <div className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__title'>В погоне за Бенкси</h3>
        <p className='movies-card__duration'>27 минут</p>
      </div>
      <div className='movies-card__image-wrapper'>
        <img className='movies-card__image' src={img} alt={123} />
      </div>
      <div className='movies-card__footer'>
        <button
          className='movie-card__button hover-opacity'
        >
          ✓ x Сохранить
        </button>
      </div>
    </div>
  );
}

export default MoviesCard;