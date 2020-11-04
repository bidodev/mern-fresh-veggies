import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Styles */
import './how.it.works.styles.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-we-work">
      <div className="how-it-works__icons-section">
        <h2 className="how-it-works__icons-section--header">This is how it works</h2>
        <div className="how-it-works__icons-section__box-container">
          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'truck']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Easy Delivery</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">HEADER</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
