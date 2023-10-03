import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/Api/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSavedMovies, setIsLoadingSavedMovies] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [authErrorMessage, setAuthErrorMessage] = useState('');
  const [profileMessageData, setProfileMessageData] = useState({ text: '', isError: false });
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  const [loginButtonData, setLoginButtonData] = useState({
    buttonText: 'Войти',
    disabled: false,
  });
  const [registerButtonData, setRegisterButtonData] = useState({
    buttonText: 'Зарегистрироваться',
    disabled: false,
  });
  const [profileButtonData, setProfileButtonData] = useState({
    buttonText: 'Сохранить',
    disabled: false,
  });

  const handleRegistration = (data) => {
    setRegisterButtonData({ buttonText: 'Регистрация...', disabled: true });
    mainApi.registration(data)
      .then(() => {
        setAuthErrorMessage('');
        handleLogin({ email: data.email, password: data.password });
      })
      .catch(error => {
        setAuthErrorMessage('При регистрации пользователя произошла ошибка.');
        console.warn(error);
      })
      .finally(() => {
        setRegisterButtonData({ buttonText: 'Зарегистрироваться', disabled: false });
      })
  };

  const handleLogin = (data) => {
    setLoginButtonData({ buttonText: 'Вход...', disabled: true });
    mainApi.login(data)
      .then((data) => {
        setAuthErrorMessage('');
        setIsLoggedIn(true);
        console.log(data);
      })
      .catch(error => {
        setAuthErrorMessage('При входе пользователя произошла ошибка.');
        console.warn(error);
      })
      .finally(() => {
        setLoginButtonData({ buttonText: 'Войти', disabled: false });
      })
  };

  const handleSignout = () => {
    setIsLoading(true);
    mainApi.signout()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.clear();
        navigate('/signin', { replace: true });
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setIsLoading(false))
  };

  const handleSaveMovie = (movie) => {
    mainApi.saveMovieToFavorites(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((error) => {
        console.warn(error);
      })
  };

  const handleDeleteMovie = (movieId) => {
    mainApi.deleteMovieFromFavorites(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter(({ _id }) => _id !== movieId));
      })
      .catch((error) => {
        console.warn(error);
      })
  }

  const handleUpdateUserInfo = (userInfo) => {
    setProfileMessageData({ text: '', isError: false });
    setProfileButtonData({ buttonText: 'Сохранение...', disabled: true });
    mainApi.updateUserInfo(userInfo)
      .then((user) => {
        setCurrentUser(user);
        setProfileMessageData({
          text: 'Профиль успешно обновлен',
          isError: false,
        });
      })
      .catch((error) => {
        setProfileMessageData({
          text: 'При обновлении профиля произошла ошибка.',
          isError: true,
        });
        console.warn(error);
      })
      .finally(() => {
        setProfileButtonData({ buttonText: 'Сохранить', disabled: false });
      })
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoadingSavedMovies(true);
      mainApi.getFavoritesMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => setIsLoadingSavedMovies(false));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setIsLoading(false));
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading ? <Preloader /> : (
        <Routes>
          <Route
            path='/'
            element={(
              <Main
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route path='/movies' element={(
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Movies
                isLoggedIn={isLoggedIn}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
                isLoading={isLoading}
              />
            </ProtectedRoute>
          )} />
          <Route path='/saved-movies' element={(
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedMovies
                isLoggedIn={isLoggedIn}
                onDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
                isLoadingSavedMovies={isLoadingSavedMovies}
              />
            </ProtectedRoute>
          )} />
          <Route path='/profile' element={(
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile
                onSignout={handleSignout}
                isLoggedIn={isLoggedIn}
                buttonData={profileButtonData}
                onUpdateUserInfo={handleUpdateUserInfo}
                profileMessageData={profileMessageData}
                setProfileMessageData={setProfileMessageData}
              />
            </ProtectedRoute>
          )} />
          <Route
            path='/signup'
            element={(
              <Register
                onRegister={handleRegistration}
                authErrorMessage={authErrorMessage}
                buttonData={registerButtonData}
              />)}
          />
          <Route
            path='/signin'
            element={(
              <Login
                onLogin={handleLogin}
                authErrorMessage={authErrorMessage}
                buttonData={loginButtonData}
              />
            )}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
