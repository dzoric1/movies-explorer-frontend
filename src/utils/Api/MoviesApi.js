import Api from './Api';
import { moviesApiSettings } from '../constants/constants';

class MoviesApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  getInitialMovies = async () => {
    return await this._doFetch(this._baseUrl, 'GET');
  }
}

const moviesApi = new MoviesApi(moviesApiSettings)

export default moviesApi;