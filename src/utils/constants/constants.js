const mainApiSettings = {
  // baseUrl: 'https://api.movies.dzoric1.nomoredomainsrocks.ru',
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
};

const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

const REGEX_EMAIL = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';

export {
  mainApiSettings,
  moviesApiSettings,
  REGEX_EMAIL,
};