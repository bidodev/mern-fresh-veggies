import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Styles */
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      <section className="story" id="story">
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
