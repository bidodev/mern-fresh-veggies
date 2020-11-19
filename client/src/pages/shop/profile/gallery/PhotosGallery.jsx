import React from 'react';
import './photos.gallery.styles.scss';

import WithScrollbar from "./WithScrollbar";
import Section from "./Section";

const PhotosGallery = ({ images, name, deviceType }) => {

  return (
    <div className="farmer-profile__gallery">
      <h2>Discover my Farm</h2>
      <Section>
        <WithScrollbar images={images} name={name}/>
      </Section>
    </div>
  );
};

export default PhotosGallery;
