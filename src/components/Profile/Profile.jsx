import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useValidationForm from "../../utils/hooks/useValidationForm";
import Header from "../Header/Header";
import './Profile.css'

const Profile = ({ onSignout, isLoggedIn }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { inputValues, errors, isValid, handleChange, setInputValues } = useValidationForm();
  const navigate = useNavigate();


  useEffect(() => {
    setInputValues({ name: 'Евгений', email: '123@123.ru' });
  }, []);

  return (
    <>
      <Header isAuth={true} isLoggedIn={isLoggedIn} />
      <main className="container">
        <section className="profile">
          <h1 className="profile__title">Привет, {inputValues.name}!</h1>
          <form
            className="profile__form"
            onSubmit={() => console.log('123')}
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
                />
                <span className={`profile__error ${errors.email ? 'profile__error_active' : ''}`}>{errors.email}</span>
              </label>
            </div>
            <div className="profile__buttons">
              {isEdit ?
                (
                  <>
                    {!isValid && <p className="profile__buttons-error">При обновлении профиля произошла ошибка.</p>}
                    <button className="profile__button profile__button_type_save hover-opacity" type="submit">Сохранить</button>
                  </>
                ) : (
                  <>
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