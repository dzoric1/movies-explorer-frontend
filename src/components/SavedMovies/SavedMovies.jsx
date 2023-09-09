import './SavedMovies.css';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = () => (
  <>
    <Header isAuth={true} />
    <main>
      <Search />
      <MoviesCardList isSavedList={true} />
    </main>
    <Footer />
  </>
);

export default SavedMovies;