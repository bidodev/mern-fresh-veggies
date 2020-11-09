import React, { useState } from 'react';
import './header.profile.styles.scss';

/* Utils */
import FileUploader from 'utils/fileUploader';

const HeaderFarmerProfile = ({ name, farmerPhoto }) => {

  const src = farmerPhoto === 'default.jpg' ? '/uploads/default.jpg' : `/uploads/${name.toLowerCase()}/images/profile/${farmerPhoto}`;

  /* Is hovering profile photo State */
  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  /* Modal State */
  const [modalStatus, setIsOpen] = useState(false);

  /* Toggle Modal function */
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  return (
    <>
      <header className="header-profile">
        <img className="header-profile__cover" src={`/images/default-cover.jpg`} alt="cover" />
        <div
          className="header-profile__avatar"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHover}
          onClick={toggleModal}
        >
          <img src={`${src}`} alt="farmer-avatar" />
          {isHovering && (
            <div>
              <li>
                <h2>Choose new photo</h2>
              </li>
            </div>
          )}
        </div>
      </header>
      <FileUploader toggleModal={toggleModal} modalStatus={modalStatus} photo={src} heading={'Profile'} />
    </>
  );
};

export default HeaderFarmerProfile;
