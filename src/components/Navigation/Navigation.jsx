import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import profileIcon from '../../assets/images/profile-icon.svg';



const Navigation = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const handleOpenMenu = () => {
    setIsBurgerOpened(!isBurgerOpened);
  };

  return (
    <div className="navigation">
      <button
        type="button"
        className={`navigation__burger hover-opacity
        ${isBurgerOpened ? 'navigation__burger_active' : ''}`}
        onClick={handleOpenMenu}
      >
        <span className={`navigation__burger-line
        ${isBurgerOpened ? 'navigation__burger-line_active' : ''}`}
        />
      </button>
      <nav className={`navigation__links-wrapper
      ${isBurgerOpened ? 'navigation__links-wrapper_opened' : ''}`}
      >
        <ul className={`navigation__links list-reset
        ${isBurgerOpened ? 'navigation__links_opened' : ''}`}
        >
          <li
            className="
          navigation__links-item
          navigation__links-item_type_main"
          >
            <NavLink
              to="/"
              onClick={handleOpenMenu}
              className={({ isActive }) => `
            navigation__link
            hover-opacity
            ${isActive ? 'navigation__link_active' : ''}`}
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__links-item">
            <NavLink
              to="/movies"
              onClick={handleOpenMenu}
              className={({ isActive }) => `
            navigation__link
            hover-opacity
            ${isActive ? 'navigation__link_active' : ''
                }`}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__links-item">
            <NavLink
              to="/saved-movies"
              onClick={handleOpenMenu}
              className={({ isActive }) => `
            navigation__link
            hover-opacity
            ${isActive ? 'navigation__link_active' : ''}`}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__links-item">
            <NavLink
              to="/profile"
              onClick={handleOpenMenu}
              className="
            navigation__link
            navigation__link_type_profile
            hover-opacity"
            >
              Аккаунт
              <span className="navigation__profile-icon">
                <img src={profileIcon} alt="Иконка профиля" />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;