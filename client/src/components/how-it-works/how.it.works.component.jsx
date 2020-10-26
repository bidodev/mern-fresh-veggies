import React from 'react';

/* Styles */
import './how.it.works.styles.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-we-work">
      {/* ======== Hero Section === */}
      <div className="how-it-works__hero-section">
        <h2 className="how-it-works__hero-section--header">How it works</h2>
        <div className="how-it-works__hero-section__img-container">
          <img src="/images/farm-1.jpg" alt="img" className="how-it-works__hero-section__img-container--img" />
        </div>

        <div className="how-it-works__hero-section__banner">
          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">Choose a Local Farmer</h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Encourage local farms to adopt and continue responsible farming practices.
            </div>
          </div>

          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">Fresh and Local Food</h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              You’ll have the peace of mind knowing that you're eating quality, natural foods.
            </div>
          </div>

          <div className="how-it-works__hero-section__banner__text-container">
            <h2 className="how-it-works__hero-section__banner__text-container--header">Convenient Deliveries</h2>
            <div className="how-it-works__hero-section__banner__text-container--text">
              Carbon-neutral shipping, 100% recyclable packaging, zero-waste warehouses.
            </div>
          </div>
        </div>
      </div>

      {/* ======== Information Section === */}
      <div className="how-it-works__info-section"></div>
    </section>
  );
};

export default HowItWorks;
