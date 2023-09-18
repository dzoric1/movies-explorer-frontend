import { Link } from "react-router-dom";
import './NavigationAuth.css';

const NavigationAuth = () => {
  return (
    <nav className="auth-navigation">
      <ul className="auth-navigation__links list-reset">
        <li>
          <Link
            className="auth-navigation__link auth-navigation__link_type_signup hover-opacity"
            to="/signup"
          >
            Регистрация
          </Link>
        </li>
        <li>
          <Link
            className="auth-navigation__link auth-navigation__link_type_signin hover-opacity"
            to="/signin"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationAuth;