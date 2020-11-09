import React from 'react';
import './gallery.list.styles.scss';

import { useSelector } from 'react-redux';

/* Components */
import ImageItem from './gallery.item';

const GalleryList = ({name}) => {

  /* pullOut farmerPhotos from the state */
  const { gallery } = useSelector(({ login }) => login.user.data.images);

  return (
    <div className="panel-profile__gallery">
      {gallery.map(({ ...img }, index) => (
        <ImageItem key={index} {...img} farmerName={name} />
      ))}
    </div>
  );
};

export default GalleryList;
