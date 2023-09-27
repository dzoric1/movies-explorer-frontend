import Api from './Api';
import { moviesApiSettings } from '../constants/constants';

class MoviesApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  getInitialMovies = async () => {
    return this._doFetch({
      url: this._baseUrl,
      method: 'GET',
    });
  }
}

const moviesApi = new MoviesApi(moviesApiSettings)

export default moviesApi;