import Auth from '../Auth/Auth';
import AuthInput from '../AuthInput/AuthInput';
import useValidationForm from "../../utils/hooks/useValidationForm";
import './Register.css'

const Register = () => {
  const { inputValues, errors, isValid, handleChange } = useValidationForm();

  return (
    <main>
      <Auth
        title='Добро Пожаловать!'
        bottomText='Уже зарегистрированы?'
        bottomLinkText="Войти"
        bottomLink='/signin'
        submitButtonText='Зарегистрироваться'
        isValid={isValid}
      >
        <AuthInput
          type='text'
          label='Имя'
          name='name'
          value={inputValues.name}
          minLength='2'
          maxLength='30'
          error={errors.name}
          handleChange={handleChange}
        />
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
    </main>
  );
}

export default Register;