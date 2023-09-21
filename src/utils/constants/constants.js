const mainApiSettings = {
  baseUrl: 'https://api.movies.dzoric1.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
    credentials: "include",
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