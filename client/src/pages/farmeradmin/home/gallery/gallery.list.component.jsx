import React from 'react';

/* Styles */
import './gallery.list.styles.scss';

/* Component Imports */
import ImageItem from './gallery.item.component';

const GalleryList = ({ name, images }) => {
  return (
    <div className="panel-profile__gallery">
      {images.gallery.map(({ ...img }, index) => (
        <ImageItem key={index} {...img} farmerName={name} />
      ))}
    </div>
  );
};

export default GalleryList;
