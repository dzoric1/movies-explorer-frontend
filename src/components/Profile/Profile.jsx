import Header from "../Header/Header";
import './Profile.css'

const Profile = () => {
  return (
    <>
      <Header isAuth={true} />
      <main className="profile container">
        <h1 className="profile__title">Привет, Виталий!</h1>
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
              />
              <span className="profile__error">12312fghfghfgh31</span>
            </label>
            <label className="profile__field">
              <h3 className="profile__input-label">E-mail</h3>
              <input
                className='profile__input'
                type="email"
                placeholder="E-mail"
                name="email"
                required
              />
              <span className="profile__error">123123</span>
            </label>
          </div>
          <div className="profile__buttons">
            <button className="profile__button hover-opacity" type="button">Редактировать</button>
            <button className="profile__button profile__button_type_logout hover-opacity" type="button">Выйти из аккаунта</button>
            {/* <p className="profile__buttons-error">При обновлении профиля произошла ошибка.</p>
            <button className="profile__button profile__button_type_save hover-opacity">Сохранить</button> */}
          </div>
        </form>
      </main>
    </>

  );
}

export default Profile;