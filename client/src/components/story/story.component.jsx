import React from 'react';
import './story.styles.scss';

const Story = () => {
  return (
    <React.Fragment>
      <section className="story" id="story">
        {/* ---- First Row ---- */}
        <div className="first-row">
          <div className="first-row__img-container">
            <img
              className="first-row__img-container--img"
              src="./images/farm-1.jpg"
              alt="img"
            />
          </div>

          <div className="first-row__description-container">
            <div className="first-row__description-container--header">
              Lorem ipsum consectetur
            </div>

            <div className="first-row__description-container--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda incidunt porro nihil, temporibus accusantium ut esse
              quam rerum eos magni aliquam voluptatum ipsa distinctio rem enim
              similique officia illo obcaecati cum aliquid reiciendis quo
              tempora iste voluptatibus! Debitis aperiam praesentium eos
              recusandae accusamus delectus, at rem fuga minima enim, blanditiis
              rerum ullam incidunt aut eveniet vel laborum omnis.
            </div>
          </div>
        </div>

        {/* ---- Second Row ---- */}
        <div className="second-row">
          <div className="second-row__description-container">
            <div className="second-row__description-container--header">
              Lorem ipsum sit amet
            </div>

            <div className="second-row__description-container--text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam assumenda consequatur, asperiores magnam ullam expedita
              quae saepe, cupiditate in a accusantium! Tenetur illum recusandae
              soluta assumenda totam consequatur ut, voluptatibus ipsum ab autem
              eius quam accusantium ducimus, at saepe asperiores culpa libero?
              Accusamus commodi, quia accusantium vero voluptatum animi possimus
              recusandae modi quis voluptatibus totam eaque doloremque
              reprehenderit quae laborum corporis? Facere eum labore ullam
              ipsam, deleniti quia. Laborum consequuntur non sed?
            </div>
          </div>

          <div className="second-row__img-container">
            <img
              className="second-row__img-container--img"
              src="./images/farm-2.jpg"
              alt="img"
            />
          </div>
        </div>

        {/* ---- Third Row ---- */}
        <div className="third-row">
          <div className="third-row__header">You're in good compagny</div>

          <div className="third-row__img-container">
            <img
              src="./images/debora.png"
              alt="img"
              className="third-row__img-container--img-1"
            />

            <img
              src="./images/don.png"
              alt="img"
              className="third-row__img-container--img-2"
            />

            <img
              src="./images/grace.png"
              alt="img"
              className="third-row__img-container--img-3"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Story;
