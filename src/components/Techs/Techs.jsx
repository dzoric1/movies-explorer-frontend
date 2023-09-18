import './Techs.css'

const Techs = () => {
  return (
    <section className='techs'>
      <div className='techs__container container'>
        <h2 className='techs__title section-title'>Технологии</h2>
        <div className='techs__content'>
          <h3 className="techs__content-title">7 технологий</h3>
          <p className="techs__content-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__content-list list-reset'>
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;