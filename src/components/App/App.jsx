import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/saved-movies' element={<SavedMovies />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/signin' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
