import React from 'react';
import './photos.gallery.styles.scss';
//import CarouselItem from '../carousel-item/carousel.item.component.jsx'

const PhotosGallery = ({ images, name }) => {
  
  return (
    <div className="farmer__profile__gallery">
      {images.gallery.map(({ path }) => {
        const src =
          path === '' ? '/uploads/default.jpg' : `/uploads/${name.toLowerCase()}/images/gallery/${path}`;

        return (
          <div className="farmer__profile__gallery--img">
            <img src={`${src}`} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default PhotosGallery;
