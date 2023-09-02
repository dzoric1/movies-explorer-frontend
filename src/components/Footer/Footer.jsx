import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer container">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__content">
        <span className="footer__copyright">&copy; 2023</span>
        <nav className="footer__navigation">
          <ul className="footer__navigation-links list-reset">
            <li>
              <Link
                className="footer__navigation-link hover-opacity"
                to="https://practicum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                className="footer__navigation-link hover-opacity"
                to="https://github.com/dzoric1"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;