import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from 'components/UI/custom-button/custom-button.component';
/* Styles */
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      {/* ======== Hero Section === */}
      <section className="story" id="story">
        {/* ---- Second Row ---- */}
        <div className="second-row">
          <div className="second-row__left-container">
            <h3 className="second-row__left-container--header">Give a explanation to the farmer</h3>
            <div className="second-row__left-container--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat rerum accusantium nesciunt
              inventore, sunt eius reiciendis itaque ducimus recusandae velit laborum ea facilis similique, molestiae
              perferendis sed magnam doloremque esse animi! Illo, minima quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore vel facere cum! Quibusdam voluptatum est maiores molestias facilis fuga?
            </div>
            <CustomButton style={{"width": "11rem", "marginLeft": "6rem", "marginTop": "3rem"}}>Get Started</CustomButton>
          </div>

          <div className="second-row__right-container">
            <div className="second-row__right-container__img-container-top">
              <img src="/images/farm-1.jpg" alt="img" className="second-row__right-container__img-container-top--img" />
            </div>

            <div className="second-row__right-container__bottom-container">
              <div className="second-row__right-container__bottom-container__img-container">
                <img
                  src="/images/farm-1.jpg"
                  alt="img"
                  className="second-row__right-container__bottom-container__img-container--img"
                />
              </div>
              <div className="second-row__right-container__bottom-container__img-container">
                <img
                  src="/images/farm-1.jpg"
                  alt="img"
                  className="second-row__right-container__bottom-container__img-container--img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Third Row ---- */}
        <div className="third-row">
          <div className="third-row__header">You're in good company</div>
          <div className="third-row__img-container">
            <img src="/images/debora.png" alt="img" className="third-row__img-container--img" />
            <img src="/images/don.png" alt="img" className="third-row__img-container--img" />
            <img src="/images/grace.png" alt="img" className="third-row__img-container--img" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Story;
