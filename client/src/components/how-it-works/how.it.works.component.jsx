import React from 'react';

/* Styles */
import './how.it.works.styles.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-we-work">
      <div className="how-it-works__hero-section">
        <h2 className="how-it-works__hero-section--header">How it works</h2>
        <div className="how-it-works__hero-section__img-container">
          <img src="/images/farm-1.jpg" alt="img" className="how-it-works__hero-section__img-container--img" />
        </div>

        <div className="how-it-works__hero-section__banner">
          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">
              Lorem ipsum dolor sit adipisicing.
            </h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">
              Lorem ipsum dolor sit adipisicing.
            </h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">
              Lorem ipsum dolor sit adipisicing.
            </h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
