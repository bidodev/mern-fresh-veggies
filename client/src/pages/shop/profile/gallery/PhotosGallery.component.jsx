import React from 'react';

/* Styles */
import './PhotosGallery.styles.scss';

/* Component Imports */
import WithScrollbar from './WithScrollbar.component';
import Section from './Section.component';

const PhotosGallery = ({ images, name, deviceType }) => {
  return (
    <div className="farmer-profile__gallery">
      <h2>Discover my Farm</h2>
      <Section>
        <WithScrollbar images={images} name={name} />
      </Section>
    </div>
  );
};

export default PhotosGallery;
