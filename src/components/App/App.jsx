import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import './App.css';

import mainApi from '../../utils/Api/MainApi';
import moviesApi from '../../utils/Api/MoviesApi';


function App() {

  // console.log(mainApi.registration());

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/saved-movies' element={<SavedMovies />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/signin' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
