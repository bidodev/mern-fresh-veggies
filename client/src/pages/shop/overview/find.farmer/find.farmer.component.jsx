import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* Styles */
import './find.farmer.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';

/* Ion Icons Imports */
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
// import IosArrowBack from 'react-ionicons/lib/IosArrowBack';

const FindYourFarmer = ({ match }) => {
  const [isLoading, setStatusLoading] = useState(true);
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios(`/farmers`)
      .then(({ data }) => {
        setFarmers(data.data.farmers);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(farmers);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1450 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1450, min: 920 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 920, min: 0 },
      items: 1,
    },
  };

  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <IosArrowForward onClick={() => onClick()} />;
  // };

  return (
    <section className="find-farmer">
      <h2 className="find-farmer__header">MEET OUR VENDORS</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="find-farmer__container">
          <Carousel
            slidesToSlide={1} // number of new items on next slide.
            swipeable // optional
            draggable // optional
            minimumTouchDrag={80} // min distance to swipe and drag.
            showDots={false} // show or hide dots on bottom.
            responsive={responsive} // responsive breakpoints
            className="carousel-container"
            itemClass="carousel-container__item"
            ssr={false} // means to render carousel on server-side.
            infinite={true} // connect last and first items.
            keyBoardControl // can slide with keyboard arrows.
            // arrows
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={<CustomRightArrow />}
          >
            {farmers.map((farmer) => (
              <Link key={farmer._id} to={`${match.url}/farmer/${farmer._id}`}>
                <li className="find-farmer__container__item">
                  <div className="find-farmer__container__item__bg-image-container">
                    <img src="/images/farm-1.jpg" alt="background" />
                  </div>
                  <div className="find-farmer__container__item__avatar-container">
                    <img
                      src={`/uploads/${farmer.name.toLowerCase()}/images/profile/${farmer.images.profile}`}
                      alt="farmer-avatar"
                    />
                  </div>
                  <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
                  <div className="find-farmer__container__item__location">
                    <div className="find-farmer__container__item__location--city">Berlin</div>
                    <div className="find-farmer__container__item__location--country">Germany</div>
                  </div>
                  <div className="find-farmer__container__item--description">{farmer.description}</div>
                </li>
              </Link>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default FindYourFarmer;
