const mainApiSettings = {
  // baseUrl: 'https://api.movies.dzoric1.nomoreparties.co',
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

export {
  mainApiSettings,
  moviesApiSettings,
};