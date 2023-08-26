import { Link } from "react-router-dom";
import './Header.css';
import headerLogo from '../../assets/images/logo.svg';



const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={headerLogo} alt="логотип" />
        </Link>
      </div>
    </header>
  );
}

export default Header;