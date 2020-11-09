import React from 'react';

/* Styles */
import './banner.styles.scss';

const Banner = () => {
  return (
    <section className="shop-overview">
      <div className="shop-overview__banner-container">
        <img src="/images/banner2-compressed.jpg" alt="banner-img" className="shop-overview__banner-container--img" />
        <h2 className="shop-overview__banner-container--header">FRESH FROM THE SOURCE</h2>
      </div>
      <div className="shop-overview__text-container">
        <h3 className="shop-overview__text-container--header">OUR PROMISE</h3>
        <div className="shop-overview__text-container--text">
          At Veggies, we focus on every step of our ingredients journeys. From field to cutting board, our culinary and
          sourcing teams of farmers work tirelessly to ensure the entire recipe development process is as
          environmentally friendly, sustainable, and delicious as possible. For us, where our food comes from is as
          important as where it's going.
        </div>
      </div>
    </section>
  );
};

export default Banner;
