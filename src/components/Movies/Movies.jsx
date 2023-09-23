import './Movies.css';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = ({ isLoggedIn }) => (
  <>
    <Header isAuth={true} isLoggedIn={isLoggedIn} />
    <main>
      <Search />
      <MoviesCardList isSavedList={false} />
    </main>
    <Footer />
  </>

);

export default Movies;