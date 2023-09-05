import { Link } from 'react-router-dom';
import AuthInput from '../AuthInput/AuthInput';
import './Auth.css'
import logo from '../../assets/images/logo.svg'

const Auth = () => {
  return (
    <main className="auth container">
      <Link to="/">
        <img className="auth__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className="auth__form">
        <div className='auth__form-inputs'>
          <AuthInput />
          <AuthInput />
        </div>
        <div className='auth__form-footer'>
          <button
            className="auth__submit hover-opacity"
            type="submit"
          >
            Зарегистрироваться
          </button>
          <p className='auth__bottom-text'>
            Уже зарегстрированы?
            <Link
              className="auth__bottom-link hover-opacity"
              to='/signin'
            >
              Войти
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Auth;