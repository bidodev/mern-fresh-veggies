import React from 'react';

/* Styles */
import './how.it.works.styles.scss';

/* Ion-Icons Imports */
/* Can use: shake={true} / rotate={true} / beat={true} / color="43853d" */
import IosBasketOutline from 'react-ionicons/lib/IosBasketOutline';
import IosCardOutline from 'react-ionicons/lib/IosCardOutline';
import IosContactOutline from 'react-ionicons/lib/IosContactOutline';
import IosNutritionOutline from 'react-ionicons/lib/IosNutritionOutline';
import IosPinOutline from 'react-ionicons/lib/IosPinOutline';
import IosTimerOutline from 'react-ionicons/lib/IosTimerOutline';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-we-work">
      <div className="how-it-works__icons-section">
        <h2 className="how-it-works__icons-section--header">How It Works</h2>
        <div className="how-it-works__icons-section__box-container">
          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <IosPinOutline fontSize="50px" color="#f7b53a" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Local Farmers</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <IosNutritionOutline fontSize="50px" color="#f75d37" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Organic & Seasonal Food</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <IosContactOutline fontSize="50px" color="#1e5b45" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Profile</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <IosBasketOutline fontSize="50px" color="#954c39" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Custom Boxes</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <IosCardOutline fontSize="50px" color="#f7b53a" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Online Payment</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <IosTimerOutline fontSize="50px" color="#1a5d7a" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Convenient Delivery</h4>
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
