import React from 'react';

/* Styles */
import './how.it.works.styles.scss';

/* Ion-Icons Imports */
/* Can use: shake={true} / rotate={true} / beat={true} / color="43853d" */
import BasketOutline from 'react-ionicons/lib/BasketOutline';
import CardOutline from 'react-ionicons/lib/CardOutline';
import PersonOutline from 'react-ionicons/lib/PersonOutline';
import NutritionOutline from 'react-ionicons/lib/NutritionOutline';
import PinOutline from 'react-ionicons/lib/PinOutline';
import TimerOutline from 'react-ionicons/lib/TimerOutline';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-we-work">
      <div className="how-it-works__icons-section">
        <h2 className="how-it-works__icons-section--header">How It Works</h2>
        <div className="how-it-works__icons-section__box-container">
          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <PinOutline fontSize="50px" color="#f7b53a" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Local Farmers</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <NutritionOutline fontSize="50px" color="#f75d37" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Organic & Seasonal Food</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <PersonOutline fontSize="50px" color="#1e5b45" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Profile</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <BasketOutline fontSize="50px" color="#954c39" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Custom Boxes</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <CardOutline fontSize="50px" color="#f7b53a" />
            </div>
            <h4 className="how-it-works__icons-section__box-container__card--header">Online Payment</h4>
            <div className="how-it-works__icons-section__box-container__card--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit nihil, aut beatae libero qui!
            </div>
          </div>

          <div className="how-it-works__icons-section__box-container__card">
            <div className="how-it-works__icons-section__box-container__card--icon">
              <TimerOutline fontSize="50px" color="#1a5d7a" />
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
