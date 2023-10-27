import { useState, useEffect, useContext } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useValidationForm from "../../utils/hooks/useValidationForm";
import Header from "../Header/Header";
import { REGEX_EMAIL } from '../../utils/constants/constants';
import './Profile.css'

const Profile = ({
  onSignout,
  isLoggedIn,
  onUpdateUserInfo,
  buttonData,
  profileMessageData,
  setProfileMessageData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { inputValues, errors, isValid, handleChange, setInputValues } = useValidationForm();
  const user = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(user.name === inputValues.name && user.email === inputValues.email)) {
      onUpdateUserInfo(inputValues);
    }
    setIsEdit(false);
  };

  useEffect(() => {
    setInputValues({ name: user.name, email: user.email });
  }, [user]);

  useEffect(() => {
    setProfileMessageData({ text: '', isError: false });
  }, [isEdit]);

  return (
    <>
      <Header isAuth={true} isLoggedIn={isLoggedIn} />
      <main className="container">
        <section className="profile">
          <h1 className="profile__title">Привет, {inputValues.name}!</h1>
          <form
            className="profile__form"
            onSubmit={handleSubmit}
          >
            <div className="profile__fields">
              <label className="profile__field">
                <span className="profile__input-label">Имя</span>
                <input
                  className='profile__input'
                  type="text"
                  placeholder="Имя"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  required
                  value={inputValues.name || ''}
                  onChange={handleChange}
                  disabled={!isEdit}
                />
                <span className={`profile__error ${errors.name ? 'profile__error_active' : ''}`}>{errors.name}</span>
              </label>
              <label className="profile__field">
                <span className="profile__input-label">E-mail</span>
                <input
                  className='profile__input'
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  required
                  value={inputValues.email || ''}
                  onChange={handleChange}
                  disabled={!isEdit}
                  pattern={REGEX_EMAIL}
                />
                <span className={`profile__error ${errors.email ? 'profile__error_active' : ''}`}>{errors.email}</span>
              </label>
            </div>
            <div className="profile__buttons">
              {isEdit ?
                (
                  <button
                    className={
                      `profile__button profile__button_type_save hover-opacity
                      ${!isValid ? 'profile__button_type_disabled-save' : ''}
                      `
                    }
                    type="submit"
                    disabled={buttonData.disabled || !isValid}
                  >
                    {buttonData.buttonText}
                  </button>
                ) : (
                  <>
                    <p
                      className={
                        `profile__buttons-message 
                        ${profileMessageData.isError ?
                          'profile__buttons-message_type_error' :
                          ''}`
                      }>
                      {profileMessageData.text}
                    </p>
                    <button className="profile__button hover-opacity" type="button" onClick={() => setIsEdit(!isEdit)}>Редактировать</button>
                    <button
                      className="profile__button profile__button_type_logout hover-opacity"
                      type="button"
                      onClick={onSignout}
                    >
                      Выйти из аккаунта
                    </button>
                  </>
                )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;