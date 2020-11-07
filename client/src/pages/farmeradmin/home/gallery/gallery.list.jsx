import React from 'react';
import './gallery.list.styles.scss';

import { useSelector } from 'react-redux';

/* Components */
import ImageItem from './gallery.item';

const GalleryList = () => {
  /* pullOut farmerPhotos from the state */
  const farmerPhotos = useSelector(({ login }) => login.user.data.farmerPhotos);

  return (
    <div className="panel-profile__gallery">
      {farmerPhotos.map(({...img}, index) => (
        <ImageItem key={index} {...img} />
      ))}
    </div>
  );
};

export default GalleryList;
