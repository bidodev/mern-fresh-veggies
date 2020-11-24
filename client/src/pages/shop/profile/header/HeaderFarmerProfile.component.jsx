import React from 'react';

/* Styles */
import './HeaderFarmerProfile.styles.scss';

const HeaderFarmerProfile = ({ slug, images }) => {
  return (
    <>
      <header className="farmer-public__header">
        {/* TODO: should user path images.cover in the future */}
        <img
          className="farmer-public__header__cover"
          src={`/uploads/${slug.toLowerCase()}/images/gallery/${images.gallery[1].path}`}
          alt="cover"
        />
        <div className="farmer-public__header__avatar">
          <img src={`/uploads/${slug.toLowerCase()}/images/profile/${images.profile}`} alt="farmer-avatar" />
        </div>
      </header>
    </>
  );
};

export default HeaderFarmerProfile;
