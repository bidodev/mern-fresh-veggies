import React from 'react'
import './HeaderFarmerProfile.styles.scss';

const HeaderFarmerProfile = ({ name, images }) => {
    return (
      <>
        <header className="farmer-public-store">
          <img className="farmer-public-store__cover" src={`/uploads/${name.toLowerCase()}/images/gallery/${images.gallery[0].path}`} alt="cover" />
          <div className="farmer-public-store__avatar">
            <img src={`/uploads/${name.toLowerCase()}/images/profile/${images.profile}`} alt="farmer-avatar" />
          </div>
        </header>
      </>
    );
  };

export default HeaderFarmerProfile
