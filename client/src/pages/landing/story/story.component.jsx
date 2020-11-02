import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Styles */
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      {/* ======== Hero Section === */}
      <section className="story" id="story">
        <div className="how-it-works__hero-section">
          <h2 className="how-it-works__hero-section--header">Our story</h2>
          <div className="how-it-works__hero-section__img-container">
            <img src="/images/farm-1.jpg" alt="img" className="how-it-works__hero-section__img-container--img" />
          </div>

          <div className="how-it-works__hero-section__banner">
            <div className="how-it-works__hero-section__banner__text-container">
              <h2 className="how-it-works__hero-section__banner__text-container--header">Choose a Local Farmer</h2>
              <div className="how-it-works__hero-section__banner__text-container--text">
                Encourage local farms to adopt and continue responsible farming practices.
              </div>
            </div>

            <div className="how-it-works__hero-section__banner__text-container">
              <h2 className="how-it-works__hero-section__banner__text-container--header">Fresh and Local Food</h2>
              <div className="how-it-works__hero-section__banner__text-container--text">
                You’ll have the peace of mind knowing that you're eating quality, natural foods.
              </div>
            </div>

            <div className="how-it-works__hero-section__banner__text-container">
              <h2 className="how-it-works__hero-section__banner__text-container--header">Convenient Deliveries</h2>
              <div className="how-it-works__hero-section__banner__text-container--text">
                Carbon-neutral shipping, 100% recyclable packaging, zero-waste warehouses.
              </div>
            </div>
          </div>
        </div>
        <div className="how-it-works__info-section">
          <div className="how-it-works__info-section__left-container">
            <div className="how-it-works__info-section__left-container__text-container">
              <h2 className="how-it-works__info-section__left-container__text-container--header">This is HEADER</h2>
              <div className="how-it-works__info-section__left-container__text-container--text">
                Farms can access a wide range of ingredients that are in season, giving you plenty of new and fresh
                choices. Follow your favorite farmers, choose your seasonal food and get delivered in the week.
              </div>
            </div>
            <div className="how-it-works__info-section__left-container__img-container">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="how-it-works__info-section__left-container__img-container--img"
              />
            </div>
          </div>

          <div className="how-it-works__info-section__right-container">
            <div className="how-it-works__info-section__right-container__img-container-1">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="how-it-works__info-section__right-container__img-container-1--img"
              />
            </div>
            <div className="how-it-works__info-section__right-container__img-container-2">
              <img
                src="/images/farm-1.jpg"
                alt="img"
                className="how-it-works__info-section__right-container__img-container-2--img"
              />
            </div>
          </div>
        </div>

        {/* ---- First Row ---- */}
        <div className="first-row">
          <div className="first-row__img-container">
            <img className="first-row__img-container--img" src="/images/farm-1.jpg" alt="img" />
          </div>
          <div className="first-row__description-container">
            <div className="first-row__description-container--header">Lorem ipsum consectetur</div>
            <div className="first-row__description-container--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda incidunt porro nihil, temporibus
              accusantium ut esse quam rerum eos magni aliquam voluptatum ipsa distinctio rem enim similique officia
              illo obcaecati cum aliquid reiciendis quo tempora iste voluptatibus! Debitis aperiam praesentium eos
              recusandae accusamus delectus, at rem fuga minima enim, blanditiis rerum ullam incidunt aut eveniet vel
              laborum omnis.
            </div>
          </div>
        </div>

        {/* ---- Second Row ---- */}
        <div className="second-row">
          <div className="second-row__left-container">
            <h3 className="second-row__left-container--header">Ipsum dolor sit amet consectetur adipisicing</h3>
            <div className="second-row__left-container--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat rerum accusantium nesciunt
              inventore, sunt eius reiciendis itaque ducimus recusandae velit laborum ea facilis similique, molestiae
              perferendis sed magnam doloremque esse animi! Illo, minima quibusdam.
            </div>
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
