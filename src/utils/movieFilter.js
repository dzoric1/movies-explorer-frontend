const movieFilter = (movies, value, isShorts) => {
  const filteredMovies = movies.filter(({ nameRU, nameEN }) => {
    return nameRU.toLowerCase().includes(value.toLowerCase()) || nameEN.toLowerCase().includes(value.toLowerCase());
  })

  if (isShorts) {
    return filterShortMovies(filteredMovies);
  }

  return filteredMovies;
};

const filterShortMovies = (movies) => {
  const filteredMovies = movies.filter(({ duration }) => duration <= 40);
  return filteredMovies
}


export default movieFilter;