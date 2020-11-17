import React from 'react'

const HeaderFarmerProfile = ({ name, images }) => {
    //const src = images.profile ? `/uploads/${name.toLowerCase()}/images/profile/${images.profile}` : '/uploads/default.jpg';
  
    return (
      <>
        <header className="header-profile">
          <img className="header-profile__cover" src={`/images/farm-1.jpg`} alt="cover" />
          <div className="header-profile__avatar">
            <img src={`/uploads/${name.toLowerCase()}/images/profile/${images.profile}`} alt="farmer-avatar" />
          </div>
        </header>
      </>
    );
  };

export default HeaderFarmerProfile
