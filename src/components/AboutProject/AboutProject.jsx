import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className="about-project container" id="about">
      <h2 className="about-project__title section-title">О проекте</h2>
      <div className="about-project__content">
        <div className="about-project__content-item">
          <h3 className="about-project__content-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__content-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__content-item">
          <h3 className="about-project__content-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__content-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-item">
          <p className="about-project__timeline-duration about-project__timeline-duration_type_green">1 неделя</p>
          <p className="about-project__timeline-caption">Back-end</p>
        </div>
        <div className="about-project__timeline-item">
          <p className="about-project__timeline-duration">4 недели</p>
          <p className="about-project__timeline-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;