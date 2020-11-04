import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      <section className="story" id="story">
        <div className="story__hero-section">
          <h2 className="story__hero-section--header">Our Story</h2>
          <div className="story__hero-section__img-container">
            <img src="/images/farm-1.jpg" alt="img" className="story__hero-section__img-container--img" />
          </div>
          <div className="story__hero-section__banner">
            <div className="story__hero-section__banner__text-container">
              <h2 className="story__hero-section__banner__text-container--header">Choose a Local Farmer</h2>
              <div className="story__hero-section__banner__text-container--text">
                Encourage local farms to adopt and continue responsible farming practices.
              </div>
            </div>
            <div className="story__hero-section__banner__text-container">
              <h2 className="story__hero-section__banner__text-container--header">Fresh and Local Food</h2>
              <div className="story__hero-section__banner__text-container--text">
                You’ll have the peace of mind knowing that you're eating quality, natural foods.
              </div>
            </div>
            <div className="story__hero-section__banner__text-container">
              <h2 className="story__hero-section__banner__text-container--header">Convenient Deliveries</h2>
              <div className="story__hero-section__banner__text-container--text">
                Carbon-neutral shipping, 100% recyclable packaging, zero-waste warehouses.
              </div>
            </div>
          </div>
          <div className="story__hero-section__button">
            <Link to="/shop">
              <CustomButton style={{ width: '11rem', margin: '2rem' }}>Get Started</CustomButton>
            </Link>
          </div>
        </div>

        <div className="story__info-section">
          <div className="story__info-section__left-container">
            <div className="story__info-section__left-container__text-container">
              <h2 className="story__info-section__left-container__text-container--header">You Are a Farmer</h2>
              <div className="story__info-section__left-container__text-container--text">
                Farms can access a wide range of ingredients that are in season, giving you plenty of new and fresh
                choices. Follow your favorite farmers, choose your seasonal food and get delivered in the week.
              </div>
              <div className="story__info-section__left-container__text-container--button">
                <Link to="/farmer/admin">
                  <CustomButton style={{ width: '11rem' }}>Join Us</CustomButton>
                </Link>
              </div>
            </div>
            <div className="story__info-section__left-container__img-container">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="story__info-section__left-container__img-container--img"
              />
            </div>
          </div>
          <div className="story__info-section__right-container">
            <div className="story__info-section__right-container__img-container-1">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="story__info-section__right-container__img-container-1--img"
              />
            </div>
            <div className="story__info-section__right-container__img-container-2">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="story__info-section__right-container__img-container-2--img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Story;
