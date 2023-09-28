import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Search.css';

const Search = ({ searchInputValue, onChangeSearchInputValue }) => {

  return (
    <section className="search container">
      <form className='search__form'>
        <div className='search__input-wrapper'>
          <input
            className='search__input'
            type="text"
            placeholder='Фильм'
            required
            onChange={(e) => onChangeSearchInputValue(e.target.value)}
            value={searchInputValue}
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
  )
}

export default Search;