import { Link } from 'react-router-dom';

import './AboutMe.css'
import photo from '../../assets/images/photo.jpg'

const AboutMe = () => {
  return (
    <section className="about-me container">
      <h2 className="about-me__title section-title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className='about-me__name'>Евгений</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 25 лет</p>
          <p className="about-me__text">
            Я начинающий Frontend
            разработчик, стремящийся к
            развитию в области веб-разработки. Я готов принять новые
            вызовы и активно учиться, чтобы
            стать ценным членом команды
            разработчиков.
          </p>
          <p className="about-me__text">
            Катаюсь на велосипеде. Люблю
            спортивные игры и открывать для
            себя новые физические активности,
            такие как скалолазание, прыжки на
            батутах и тд.
          </p>
          <Link
            className="about-me__link hover-opacity"
            to="https://github.com/dzoric1"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img className="about-me__photo" src={photo} alt="Фото Студента" />
      </div>
    </section>
  );
}

export default AboutMe;