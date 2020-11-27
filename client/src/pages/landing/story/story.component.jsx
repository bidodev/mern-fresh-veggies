import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      <section className="story" id="story">
        <Fade left>
          <div className="story__hero-section ">
            <h2 className="story__hero-section--header">Why choose us?</h2>
            <div className="story__hero-section__img-container">
              <img
                src="/images/story__info-section2.jpg"
                alt="img"
                className="story__hero-section__img-container--img"
              />
            </div>
            <div className="story__hero-section__banner">
              <div className="story__hero-section__banner__text-container">
                <h2 className="story__hero-section__banner__text-container--header">Choose your Farmer</h2>
                <div className="story__hero-section__banner__text-container--text">
                  Encourage local farms to adopt and continue responsible farming practices.
                </div>
              </div>
              <div className="story__hero-section__banner__text-container">
                <h2 className="story__hero-section__banner__text-container--header">Fresh and Local Food</h2>
                <div className="story__hero-section__banner__text-container--text">
                  You’ll have the peace of mind knowing that you're eating quality and natural foods.
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
                <CustomButton style={{ width: '11rem', margin: '2rem' }}>Go to Shop</CustomButton>
              </Link>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="story__info-section">
            <div className="story__info-section__left-container">
              <div className="story__info-section__left-container__text-container">
                <h2 className="story__info-section__left-container__text-container--header">You are a farmer</h2>
                <div className="story__info-section__left-container__text-container--text">
                  We host your website and connect you directly to clients! Join our platform, personalize your own
                  profile and manage your store.
                </div>
                <div className="story__info-section__left-container__text-container--button">
                  <Link to="/farmer/admin">
                    <CustomButton>Join Us</CustomButton>
                  </Link>
                </div>
              </div>
              <div className="story__info-section__left-container__img-container">
                <img
                  src="/images/story__info-section5.jpg"
                  alt="img"
                  className="story__info-section__left-container__img-container--img"
                />
              </div>
            </div>
            <div className="story__info-section__right-container">
              <div className="story__info-section__right-container__img-container-1">
                <img
                  src="/images/story-hero-section1.jpg"
                  alt="img"
                  className="story__info-section__right-container__img-container-1--img"
                />
              </div>
              <div className="story__info-section__right-container__img-container-2">
                <img
                  src="/images/story__info-section1.jpg"
                  alt="img"
                  className="story__info-section__right-container__img-container-2--img"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </React.Fragment>
  );
};

export default Story;
