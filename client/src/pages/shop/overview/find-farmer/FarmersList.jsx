import React from 'react';
import './FarmersList.styles.scss';

import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* Ion Icons Imports */
import IosPin from 'react-ionicons/lib/IosPin';
// import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
// import IosArrowBack from 'react-ionicons/lib/IosArrowBack';

function FarmerList({ farmers, match }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1470 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1470, min: 970 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 970, min: 0 },
      items: 1,
    },
  };
    

  // ===== THIS IS AN EXAMPLE TO ADD CUSTOM ARROW ON CAROUSEL ===
  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <IosArrowForward onClick={() => onClick()} />;
  // };

  return (
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
            <div className="find-farmer__container__item">
              <div className="find-farmer__container__item__bg-image-container">
                <img
                  src={`/uploads/${farmer.name.toLowerCase()}/images/gallery/${farmer.images.gallery[1].path}`}
                  alt="background"
                />
              </div>

              <div className="find-farmer__container__item--ratings">⭐⭐⭐⭐⭐</div>
              <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
              <div className="find-farmer__container__item__location">
                <IosPin fontSize="15px" color="white" className="find-farmer__container__item__location--icon" />
                Berlin, GERMANY
              </div>

              <div className="find-farmer__container__item__avatar-container">
                <img
                  src={`/uploads/${farmer.name.toLowerCase()}/images/profile/${farmer.images.profile}`}
                  alt="farmer-avatar"
                />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default FarmerList;
