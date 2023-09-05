import { Link } from "react-router-dom";
import './Header.css';
import headerLogo from '../../assets/images/logo.svg';
import NavigationAuth from "../NavigationAuth/NavigationAuth";
import Navigation from "../Navigation/Navigation";


const Header = ({ isMainPage = false, isAuth }) => {
  return (
    <header className={`header ${isMainPage ? 'header_type_main' : ''}`}>
      <div className="header__container container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="логотип" />
        </Link>
        {isAuth ? <Navigation /> : <NavigationAuth />}
      </div>
    </header>
  );
}

export default Header;