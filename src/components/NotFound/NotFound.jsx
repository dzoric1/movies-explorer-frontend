import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="container">
      <section className='not-found'>
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <button
          type="button"
          className="not-found__button hover-opacity"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </section>
    </main>
  );
};

export default NotFound;