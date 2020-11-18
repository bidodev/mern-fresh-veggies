import React from 'react'
import './HeaderFarmerProfile.styles.scss';

const HeaderFarmerProfile = ({ name, images }) => {
    return (
      <>
        <header className="farmer-public__header">
          {/* TODO: should user path images.cover in the future */}
          <img className="farmer-public__header__cover" src={`/uploads/${name.toLowerCase()}/images/gallery/${images.gallery[0].path}`} alt="cover" />
          <div className="farmer-public__header__avatar">
            <img src={`/uploads/${name.toLowerCase()}/images/profile/${images.profile}`} alt="farmer-avatar" />
          </div>
        </header>
      </>
    );
  };

export default HeaderFarmerProfile
