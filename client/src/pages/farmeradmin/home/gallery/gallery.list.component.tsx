import React from 'react';

/* Styles */
import './gallery.list.styles.scss';

/* Component Imports */
import ImageItem from './gallery.item.component';

const GalleryList = ({ slug, images }) => {
  return (
    <div className="panel-profile__gallery">
      {images.gallery.map((img: any, index: number) => (
        <ImageItem key={index} name={img.name} path={img.path} slug={slug} />
      ))}
    </div>
  );
};

export default GalleryList;
