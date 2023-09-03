import './Movies.css';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = () => (
  <>
    <Header />
    <main>
      <Search />
      <MoviesCardList />
    </main>
    <Footer />
  </>

);

export default Movies;