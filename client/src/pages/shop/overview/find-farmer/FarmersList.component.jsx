import React from 'react';

/* Styles */
import './FarmersList.styles.scss';

/* Carousel Imports */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* Component Imports */
import FarmerCard from './FarmerCard.component';

const FarmerList = ({ farmers, match }) => {
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
        {farmers.map((farmer, index) => (
          <FarmerCard key={index} farmer={farmer} match={match} />
        ))}
      </Carousel>
    </div>
  );
};

export default FarmerList;
