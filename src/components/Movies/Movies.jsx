import './Movies.css';
import Header from '../Header/Header';
import Search from '../SearchForm/Search';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

const Movies = () => (
  <>
    <Header />
    <main>
      <Search />
      <MoviesCard />
    </main>
    <Footer />
  </>

);

export default Movies;