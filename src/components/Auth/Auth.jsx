import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../assets/images/logo.svg';

const Auth = (
  {
    title,
    bottomText,
    bottomLinkText,
    bottomLink,
    children,
    isValid,
    onSubmit,
    buttonData,
    errorMessage,
  }
) => {
  return (
    <section className="auth container">
      <Link to="/" className='hover-opacity'>
        <img className="auth__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="auth__title">{title}</h1>
      <form className="auth__form" onSubmit={onSubmit}>
        <div className='auth__form-inputs'>
          {children}
        </div>
        <div className='auth__form-footer'>
          <p className='auth__error'>{errorMessage}</p>
          <button
            className="auth__submit hover-opacity"
            type="submit"
            disabled={!isValid || buttonData.disabled}
          >
            {buttonData.buttonText}
          </button>
          <p className='auth__bottom-text'>
            {bottomText}
            <Link
              className="auth__bottom-link hover-opacity"
              to={bottomLink}
            >
              {bottomLinkText}
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Auth;