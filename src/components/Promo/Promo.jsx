import promoImg from '../../assets/images/promo-img.svg'
import './Promo.css'

const Promo = () => {
  return (
    <section className="promo">
      <div className='promo__container container'>
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link" href="#about">Узнать больше</a>
        </div>
        <img className='promo__img' src={promoImg} alt="Облако слов" />
      </div>
    </section>
  );
};

export default Promo;