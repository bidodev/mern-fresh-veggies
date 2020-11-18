import React from 'react';
import './photos.gallery.styles.scss';
//import CarouselItem from '../carousel-item/carousel.item.component.jsx'

const PhotosGallery = ({ images, name }) => {
  return (
    <div className="farmer-profile__gallery">
      <h2>Discover my Farm</h2>
      <div className="farmer-profile__gallery__images">
        {images.gallery.map(({ path }) => {
          const src = path === '' ? '/uploads/default.jpg' : `/uploads/${name.toLowerCase()}/images/gallery/${path}`;

          return (
            <div className="farmer-profile__gallery__images--img">
              <img src={`${src}`} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotosGallery;
