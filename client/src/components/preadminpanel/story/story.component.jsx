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
            <h3 className="story__how-it-works__left-container--header">How It Works</h3>
            <div className="story__how-it-works__left-container--text">
              1- Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              2- Pariatur repellat rerum accusantium nesciunt inventore, sunt eius reiciendis itaque ducimus recusandae
              velit laborum ea facilis similique, molestiae perferendis sed magnam doloremque esse animi! <br />
              3- Illo, minima quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore vel
              facere cum! Quibusdam voluptatum est maiores molestias facilis fuga?
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
            <div className="story__create-your-profile__description-container--header">Create Your Profile Now</div>
            <div className="story__create-your-profile__description-container--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda incidunt porro nihil, temporibus
              accusantium ut esse quam rerum eos magni aliquam voluptatum ipsa distinctio rem enim similique officia
              illo obcaecati cum aliquid reiciendis quo tempora iste voluptatibus! Debitis aperiam praesentium eos
              recusandae accusamus delectus, at rem fuga minima enim, blanditiis rerum ullam incidunt aut eveniet vel
              laborum omnis.
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
