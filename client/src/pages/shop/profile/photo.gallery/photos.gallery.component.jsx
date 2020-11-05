import React from 'react';
import './photos.gallery.styles.scss';
//import CarouselItem from '../carousel-item/carousel.item.component.jsx'

const PhotosGallery = () => {
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
