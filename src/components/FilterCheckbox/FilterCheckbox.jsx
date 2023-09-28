import './FilterCheckbox.css'

const FilterCheckbox = ({ text, checked, onChange }) => {
  return (
    <div className='filter-сheckbox'>
      <label className='filter-сheckbox__label' htmlFor='filtered-checkbox'>
        <input
          className='filter-сheckbox__input'
          type="checkbox"
          id='filtered-checkbox'
          onChange={onChange}
          checked={checked}
        />
        <span className='filter-сheckbox__circle hover-opacity'></span>
      </label>
      {text && <span className="filter-сheckbox__text">{text}</span>}
    </div>
  )
}

export default FilterCheckbox;