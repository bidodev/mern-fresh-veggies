import React from 'react';
import './gallery.list.styles.scss';

import ImageItem from '../image-item.component';

const GalleryList = () => {
  const galleryImages = [
    { id: 1, name: 'a', path: 'default.jpg' },
    { id: 2, name: 'b', path: 'default.jpg' },
    { id: 3, name: 'c', path: 'default.jpg' },
  ];

  return (
    <div className="panel-profile__gallery">
      {galleryImages.map((img) => (
        <ImageItem key={img.id} img={img} />
      ))}
    </div>
  );
};

export default GalleryList;
