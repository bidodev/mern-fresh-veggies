import React from 'react';
import { useSelector } from 'react-redux';
import './photos.gallery.styles.scss';
//import CarouselItem from '../carousel-item/carousel.item.component.jsx'

const PhotosGallery = () => {
  const { name } = useSelector(({ login }) => login.user.data);
  const { gallery } = useSelector(({ login }) => login.user.data.images);

  // const src = path === 'default.jpg' ? '/uploads/default.jpg' : `/uploads/${farmer.toLowerCase()}/images/gallery/${path}`;

  return (
    <div className="farmer__profile__gallery">
      {gallery.map(({ path }) => {
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
