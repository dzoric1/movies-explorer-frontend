import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found container">
      <div className="not-found__content">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button
        type="button"
        className="not-found__button hover-opacity"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
};

export default NotFound;