import React, { useState } from 'react';
import Editable from 'react-text-content-editable';
import ImageItem from './image-item.component';
import FileUploader from 'utils/fileUploader';

/* Component Imports */
import ReviewsAdmin from 'pages/farmeradmin/reviews/reviews.component';

/* Styles */
import './profile.styles.scss';

const ProfileAdmin = ({ photo, name }) => {
  /* Modal State */
  const [modalStatus, setIsOpen] = useState(false);

  /* Toggle Modal function */
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };
  
  const [text, setText] = useState(
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus suscipit excepturi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus suscipit excepturi!'
  );

  const onChange = (value) => {
    setText(value);
  };

  const profileImages = [
    { id: 1, name: 'a', path: 'default.jpg' },
    { id: 2, name: 'b', path: 'default.jpg' },
    { id: 3, name: 'c', path: 'default.jpg' },
  ];

  /* Is hovering profile photo State */
  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  // URL to patch the profile photo
  const url = '/users/profile';

  return (
    <section className="profile-admin">
      <div className="profile-admin__profile-container">
        <h2 className="profile-admin__profile-container--header">YOUR PROFILE</h2>
        <div className="profile-admin__profile-container__information">
          <div
            className="profile-admin__profile-container__information__avatar"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
            onClick={toggleModal}
          >
            <img src={`/images/users/${photo}`} alt="avatar" />
            {isHovering && (
              <div>
                <li>
                  <h2>Choose new photo</h2>
                </li>
              </div>
            )}
          </div>

          <div className="profile-admin__profile-container__information--biography">
            Welcome to your profile {name}
            <Editable tag="p" type="text" maxLength="200" onChange={onChange} value={text} readOnly={false} />
          </div>
        </div>
        <hr />
        <div className="profile-admin__profile-container__gallery">
          {profileImages.map((img) => (
            <ImageItem key={img.id} img={img} />
          ))}
        </div>
      </div>

      <ReviewsAdmin />
      <FileUploader toggleModal={toggleModal} modalStatus={modalStatus} url={url} />
    </section>
  );
};

export default ProfileAdmin;
