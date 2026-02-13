import React from 'react';

/* Styles */
import './PhotosGallery.styles.scss';

/* Component Imports */
import WithScrollbar from './WithScrollbar.component';
import Section from './Section.component';

const PhotosGallery = ({ images, slug }: { images: any[]; slug: string }) => {
  const GalleryWithScrollbar = WithScrollbar as any;

  return (
    <div className="farmer-profile__gallery">
      <h2>Discover my Farm</h2>
      <Section>
        <GalleryWithScrollbar images={images} slug={slug} />
      </Section>
    </div>
  );
};

export default PhotosGallery;
