import React from 'react';
import { useDispatch } from 'react-redux';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Ion-Icons Imports */
/* Can use: shake={true} / rotate={true} / beat={true} / color="43853d" */
import IosCreateOutline from 'react-ionicons/lib/IosCreateOutline';
import IosColorPaletteOutline from 'react-ionicons/lib/IosColorPaletteOutline';
import IosSettingsOutline from 'react-ionicons/lib/IosSettingsOutline';

/* Styles */
import './story.styles.scss';

const Story = () => {
  const dispatch = useDispatch();

  const signUpAsFarmer = () => {
    dispatch({ type: 'SHOW_AUTH' });
    dispatch({ type: 'SWITCH_AUTH' });
  };

  return (
    <React.Fragment>
      <section className="story" id="story">
        <div className="story__how-it-works">
          <div className="story__how-it-works__left-container">
            <h3 className="story__how-it-works__left-container__header">
              Are you a local producer? Join us in a few steps:
            </h3>
            <div className="story__how-it-works__left-container__text-container">
              <div className="story__how-it-works__left-container__text-container__list-item">
                <div className="story__how-it-works__left-container__text-container__list-item--icon">
                  <IosCreateOutline fontSize="30px" />
                </div>
                <div className="story__how-it-works__left-container__text-container__list-item--text">
                  Create an account with your Email address.
                </div>
              </div>
              <div className="story__how-it-works__left-container__text-container__list-item">
                <div className="story__how-it-works__left-container__text-container__list-item--icon">
                  <IosColorPaletteOutline fontSize="30px" />
                </div>
                <div className="story__how-it-works__left-container__text-container__list-item--text">
                  Personalize your store: describe your activity in a biography, upload images of your farm and
                  products.
                </div>
              </div>
              <div className="story__how-it-works__left-container__text-container__list-item">
                <div className="story__how-it-works__left-container__text-container__list-item--icon">
                  <IosSettingsOutline fontSize="30px" />
                </div>
                <div className="story__how-it-works__left-container__text-container__list-item--text">
                  Manage your online store: add your available products to your stock and track your orders.
                </div>
              </div>
            </div>
          </div>
          <div className="story__how-it-works__right-container">
            <div className="story__how-it-works__right-container__img-container-top">
              <img
                src="/images/preadmin/farm-1.png"
                alt="img"
                className="story__how-it-works__right-container__bottom-container__img-container--img"
              />
            </div>
            <div className="story__how-it-works__right-container__bottom-container">
              <div className="story__how-it-works__right-container__bottom-container__img-container">
                <img
                  src="/images/preadmin/farm-2.jpg"
                  alt="img"
                  className="story__how-it-works__right-container__bottom-container__img-container--img"
                />
              </div>
              <div className="story__how-it-works__right-container__bottom-container__img-container">
                <img
                  src="/images/preadmin/farm-3.png"
                  alt="img"
                  className="story__how-it-works__right-container__img-container-top--img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="story__create-your-profile">
          <div className="story__create-your-profile__img-container">
            <img
              className="story__create-your-profile__img-container--img"
              src="/images/preadmin/farmer.png"
              alt="img"
            />
          </div>
          <div className="story__create-your-profile__description-container">
            <div className="story__create-your-profile__description-container--header">Create Your Profile</div>
            <div className="story__create-your-profile__description-container--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda incidunt porro nihil, temporibus quam
              rerum eos magni aliquam voluptatum ipsa distinctio officia cum.
            </div>
            <div className="story__create-your-profile__description-container--button">
              <CustomButton onClick={signUpAsFarmer} style={{ width: '11rem' }}>
                Start Now
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Story;
