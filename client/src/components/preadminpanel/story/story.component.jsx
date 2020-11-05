import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      <section className="story" id="story">
        <div className="story__how-it-works">
          <div className="story__how-it-works__left-container">
            <h3 className="story__how-it-works__left-container__header">How It Works</h3>
            <div className="story__how-it-works__left-container__text-container">
              <div className="story__how-it-works__left-container__text-container__list-item">
                <div className="story__how-it-works__left-container__text-container__list-item--icon">
                  <FontAwesomeIcon icon={['fas', 'sign-in-alt']} />
                </div>
                <div className="story__how-it-works__left-container__text-container__list-item--text">
                  Create an account.
                </div>
              </div>

              <div className="story__how-it-works__left-container__text-container__list-item">
                <div className="story__how-it-works__left-container__text-container__list-item--icon">
                  <FontAwesomeIcon icon={['fas', 'palette']} />
                </div>
                <div className="story__how-it-works__left-container__text-container__list-item--text">
                  Give your store the look you want. Upload an image of your avatar and your farm and add a description
                  about your activity.
                </div>
              </div>

              <div className="story__how-it-works__left-container__text-container__list-item">
                <div className="story__how-it-works__left-container__text-container__list-item--icon">
                  <FontAwesomeIcon icon={['fas', 'store']} />
                </div>
                <div className="story__how-it-works__left-container__text-container__list-item--text">
                  Manage your online store. Access your stock of products and track your orders from your profile page.
                </div>
              </div>
            </div>
          </div>
          <div className="story__how-it-works__right-container">
            <div className="story__how-it-works__right-container__img-container-top">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="story__how-it-works__right-container__img-container-top--img"
              />
            </div>
            <div className="story__how-it-works__right-container__bottom-container">
              <div className="story__how-it-works__right-container__bottom-container__img-container">
                <img
                  src="/images/farm-1.jpg"
                  alt="img"
                  className="story__how-it-works__right-container__bottom-container__img-container--img"
                />
              </div>
              <div className="story__how-it-works__right-container__bottom-container__img-container">
                <img
                  src="/images/farm-1.jpg"
                  alt="img"
                  className="story__how-it-works__right-container__bottom-container__img-container--img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="story__create-your-profile">
          <div className="story__create-your-profile__img-container">
            <img className="story__create-your-profile__img-container--img" src="/images/farm-1.jpg" alt="img" />
          </div>
          <div className="story__create-your-profile__description-container">
            <div className="story__create-your-profile__description-container--header">Create Your Profile</div>
            <div className="story__create-your-profile__description-container--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda incidunt porro nihil, temporibus quam
              rerum eos magni aliquam voluptatum ipsa distinctio officia cum.
            </div>
            <div className="story__create-your-profile__description-container--button">
              <CustomButton style={{ width: '11rem' }}>Start Now</CustomButton>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Story;
