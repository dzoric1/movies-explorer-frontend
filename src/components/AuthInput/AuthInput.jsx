import './AuthInput.css';

const AuthInput = ({
  type,
  label,
  name,
  value,
  minLength = null,
  maxLength = null,
  error,
  handleChange,
}) => (
  <label className='auth-input'>
    <span className='auth-input__label'>{label}</span>
    <input
      className='auth-input__input'
      type={type}
      placeholder={label}
      value={value}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      onChange={handleChange}
      required
    />
    <span className='auth-input__error'>{error}</span>
  </label>
);
export default AuthInput;