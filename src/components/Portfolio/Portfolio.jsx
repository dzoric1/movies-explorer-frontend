import { Link } from 'react-router-dom';
import './Portfolio.css';
import icon from '../../assets/images/portfolio-icon.svg';

const Portfolio = () => {
  return (
    <section className='portfolio container'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links list-reset'>
        <li className="portfolio__links-item">
          <Link
            className="portfolio__link hover-opacity"
            to="https://dzoric1.github.io/how-to-learn/"
            target="_blank"
          >
            Статичный сайт
            <img className="portfolio__link-icon" src={icon} alt="иконка стрелочки" />
          </Link>
        </li>
        <li className="portfolio__links-item">
          <Link
            className="portfolio__link hover-opacity"
            to="https://dzoric1.github.io/russian-travel/"
            target="_blank"
          >
            Адаптивный сайт
            <img className="portfolio__link-icon" src={icon} alt="иконка стрелочки" />
          </Link>
        </li>
        <li className="portfolio__links-item">
          <Link
            className="portfolio__link hover-opacity"
            to="https://github.com/dzoric1/react-mesto-api-full-gha/"
            target="_blank"
          >
            Одностраничное приложение
            <img className="portfolio__link-icon" src={icon} alt="иконка стрелочки" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;