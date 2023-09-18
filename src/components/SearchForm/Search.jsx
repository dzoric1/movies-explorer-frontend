import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Search.css';

const Search = () => (
  <section className="search container">
    <form className='search__form'>
      <div className='search__input-wrapper'>
        <input
          className='search__input'
          type="text"
          placeholder='Фильм'
          required
        />
        <button
          className='search__submit hover-opacity'
          type='submit'
          aria-label='Поиск'
        >
          Поиск
        </button>
      </div>
      <FilterCheckbox text='Короткометражки' />
    </form>
  </section>
);

export default Search;