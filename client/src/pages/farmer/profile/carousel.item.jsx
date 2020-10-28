import React from 'react';

const CarouselItem = ({
  id,
  title,
  extra,
  description,
  date,
  city,
  cover,
  tecnologies,
  linkLive,
  linkGitHub,
}) => {
  return (
    <div>
      <div className="carousel__item">
        <div className="carousel__item__desc">
          <div className="carousel__item__desc__tecnologies">
            {tecnologies.map((tecnologie, i) => (
              <img
                key={i}
                src={`./icons/${tecnologie}.png`}
                title={tecnologie}
                alt={tecnologie}
              />
            ))}
          </div>
          <div className="carousel__item__desc__title">
            <p>{title}</p>
            <p>
              {date} {city}
            </p>
          </div>
          <div className="carousel__item__desc__paragraphs">
            <p>{extra}</p>
            <p>{description}</p>
          </div>
          <div className="carousel__item__desc__cta">
          <button onClick={() => window.open(`${linkGitHub}`, '_blank')} >GitHub</button>
          </div>
        </div>
        <div className="carousel__item__picture" onClick={() => window.open(`${linkLive}`, '_blank')}>
           <img key={id} src={`./projects/${cover}`} title={title} alt={cover} />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;