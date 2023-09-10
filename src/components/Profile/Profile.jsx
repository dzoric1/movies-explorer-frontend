import { useState, useEffect } from "react";
import useValidationForm from "../../utils/useValidationForm";
import Header from "../Header/Header";
import './Profile.css'

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { inputValues, errors, isValid, handleChange, setInputValues } = useValidationForm();

  useEffect(() => {
    setInputValues({ name: 'Евгений', email: '123@123.ru' });
  }, []);

  return (
    <>
      <Header isAuth={true} />
      <main className="profile container">
        <h1 className="profile__title">Привет, {inputValues.name}!</h1>
        <form className="profile__form">
          <div className="profile__fields">
            <label className="profile__field">
              <h3 className="profile__input-label">Имя</h3>
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
              <h3 className="profile__input-label">E-mail</h3>
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
                  <button className="profile__button profile__button_type_save hover-opacity">Сохранить</button>
                </>
              ) : (
                <>
                  <button className="profile__button hover-opacity" type="button" onClick={() => setIsEdit(!isEdit)}>Редактировать</button>
                  <button className="profile__button profile__button_type_logout hover-opacity" type="button">Выйти из аккаунта</button>
                </>
              )}
          </div>
        </form>
      </main>
    </>

  );
}

export default Profile;