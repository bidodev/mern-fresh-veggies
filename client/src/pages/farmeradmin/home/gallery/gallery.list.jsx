import React from 'react';
import './gallery.list.styles.scss';

/* Components */
import ImageItem from './gallery.item';

const GalleryList = ({name, images}) => {

  return (
    <div className="panel-profile__gallery">
      {images.gallery.map(({ ...img }, index) => (
        <ImageItem key={index} {...img} farmerName={name} />
      ))}
    </div>
  );
};

export default GalleryList;
