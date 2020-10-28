import React from 'react';
import './projects.component.styles.scss';

import './carousel.scss'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './photos.gallery.scss';
//import CarouselItem from '../carousel-item/carousel.item.component.jsx'

const PhotosGallery = () => {
  const carouselSettings = {
    showArrows: false,
    showStatus: false,
    //showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    //stopOnHover: true,
    //swipeable: true,
    //dynamicHeight: false,
    emulateTouch: true,
    thumbWidth: 300,
    selectedItem: 1,
    interval: 60000,
    transitionTime: 400,
    swipeScrollTolerance: 5,
  };

  return (
    <div className="farmer__profile__gallery">

        <div className="farmer__profile__gallery--img">
          <img src="/images/farmers/farm-1.jpg" alt="img" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="farmer__profile__gallery--img">
          <img src="/images/farmers/farm-2.jpg" alt="img" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="farmer__profile__gallery--img">
          <img src="/images/farmers/farm-3.jpg" alt="img" />
          {/* <p className="legend">Legend 1</p> */}
        </div>

    </div>
  );
};

export default PhotosGallery;
