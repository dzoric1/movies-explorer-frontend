import Auth from '../Auth/Auth';
import AuthInput from '../AuthInput/AuthInput';
import useValidationForm from "../../utils/useValidationForm";
import './Login.css'

const Login = () => {
  const { inputValues, errors, isValid, handleChange } = useValidationForm();

  return (
    <Auth
      title='Рады видеть!'
      bottomText='Ещё не зарегистрированы?'
      bottomLinkText="Регистрация"
      bottomLink='/signup'
      submitButtonText='Войти'
      isValid={isValid}
    >
      <AuthInput
        type='email'
        label='E-mail'
        name='email'
        value={inputValues.email}
        error={errors.email}
        handleChange={handleChange}
      />
      <AuthInput
        type='password'
        label='Пароль'
        name='password'
        value={inputValues.password}
        minLength='8'
        maxLength='30'
        error={errors.password}
        handleChange={handleChange}
      />
    </Auth>
  );
}

export default Login;