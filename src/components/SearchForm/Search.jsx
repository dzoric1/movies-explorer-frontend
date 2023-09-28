import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Search.css';

const Search = (
  {
    searchInputValue,
    onChangeSearchInputValue,
    isShorts,
    onChangeShortsChexbox,
  }
) => {
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="search container">
      <form className='search__form' onSubmit={onSubmit}>
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
        <FilterCheckbox
          checked={isShorts}
          onChange={onChangeShortsChexbox}
          text='Короткометражки'
        />
      </form>
    </section>
  )
}

export default Search;