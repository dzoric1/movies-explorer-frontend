import Api from './Api';
import { mainApiSettings } from '../constants/constants';

class MainApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  getUserInfo = async () => {
    return this._doFetch(`${this._baseUrl}/users/me`, 'GET');
  }

  updateUserInfo = async (data) => {
    return this._doFetch(`${this._baseUrl}/users/me`, 'PATCH', data);
  }

  getFavoritesMovies = async () => {
    return this._doFetch(`${this._baseUrl}/movies`, 'GET');
  }

  saveMovieToFavorites = async (data) => {
    return this._doFetch(`${this._baseUrl}/movies`, 'POST', data);
  }

  deleteMovieFromFavorites = async (movieId) => {
    return this._doFetch(`${this._baseUrl}/movies/${movieId}`, 'DELETE');
  }

  registration = async (data) => {
    return this._doFetch(`${this._baseUrl}/signup`, 'POST', data);
  }

  login = async (data) => {
    return this._doFetch(`${this._baseUrl}/signin`, 'POST', data);
  }

  signout = async () => {
    return this._doFetch(`${this._baseUrl}/signout`, 'POST');
  }
}

const mainApi = new MainApi(mainApiSettings);

export default mainApi;