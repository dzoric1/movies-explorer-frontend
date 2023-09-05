import './AuthInput.css';

const AuthInput = () => (
  <label className='auth-input'>
    <span className='auth-input__label'>Имя</span>
    <input className='auth-input__input' type='text' placeholder='Имя' />
    <span className='auth-input__error'>Ошибка</span>
  </label>
);
export default AuthInput;