import Api from './Api';
import { mainApiSettings } from '../constants/constants';

class MainApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  getUserInfo = async () => {
    return this._doFetch({
      url: `${this._baseUrl}/users/me`,
      method: 'GET',
      options: {
        credentials: 'include',
        cache: 'no-cache',
      },
    });
  }

  updateUserInfo = async (data) => {
    return this._doFetch({
      url: `${this._baseUrl}/users/me`,
      method: 'PATCH',
      options: {
        credentials: 'include',
      },
      data,
    });
  }

  getFavoritesMovies = async () => {
    return this._doFetch({
      url: `${this._baseUrl}/movies`,
      method: 'GET',
      options: {
        credentials: 'include',
      },
    });
  }

  saveMovieToFavorites = async (data) => {
    return this._doFetch({
      url: `${this._baseUrl}/movies`,
      method: 'POST',
      options: {
        credentials: 'include',
      },
      data: {
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      },
    });
  }

  deleteMovieFromFavorites = async (movieId) => {
    return this._doFetch({
      url: `${this._baseUrl}/movies/${movieId}`,
      method: 'DELETE',
      options: {
        credentials: 'include',
      },
    });
  }

  registration = async (data) => {
    return this._doFetch({
      url: `${this._baseUrl}/signup`,
      method: 'POST',
      data,
    });
  }

  login = async (data) => {
    return this._doFetch({
      url: `${this._baseUrl}/signin`,
      method: 'POST',
      options: {
        credentials: 'include',
      },
      data,
    });
  }

  signout = async () => {
    return this._doFetch({
      url: `${this._baseUrl}/signout`,
      method: 'POST',
      options: {
        credentials: 'include',
      },
    });
  }
}

const mainApi = new MainApi(mainApiSettings);

export default mainApi;