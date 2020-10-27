import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Editable from 'react-text-content-editable';
import ImageItem from './image-item.component';

/* Component Imports */
import ReviewsAdmin from 'components/farmer/reviews/reviews.component';
import Modal from 'components/modal/modal.component';

/* Styles */
import './profile.styles.scss';

const ProfileAdmin = ({ photo, name }) => {
  const [text, setText] = useState(
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus suscipit excepturi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus suscipit excepturi!'
  );

  const onChange = (value) => {
    setText(value);
  };

  /* Modal State */
  const [modalStatus, setIsOpen] = useState(false);

  /* Toggle Modal function */
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  /* Modal Styles */
  const customStyles = {
    content: {
      width: '40vw',
      height: '70vh',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const profileImages = [
    { id: 1, name: 'a', url: 'default.jpg' },
    { id: 2, name: 'b', url: 'default.jpg' },
    { id: 3, name: 'c', url: 'default.jpg' },
  ];

  /* Is hovering profile photo State */
  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  /* Is file loaded state */
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  /* Upload new photo */
  const submitForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('photo', selectedFile);

    axios
      .patch('/users/profile', data)
      .then((res) => {
        console.log(res.response);
      })
      .catch((err) => console.log(err.response.data.message));
  };

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
        <hr/>
        <div className="profile-admin__profile-container__gallery">
          {profileImages.map((img) => <ImageItem key={img.id} img={img}/ >)}
        </div>
      </div>

      <ReviewsAdmin />

      <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
        <div className="upload__photo">
          <div className="upload__photo__header">
            <h3>Upload Profile Picture</h3>
            <Icon icon={'times'} onClick={toggleModal} />
          </div>

          <hr />
          <form onSubmit={submitForm}>
            <label htmlFor="file-upload" className="custom-file-upload">
              Select Photo
            </label>
            <input id="file-upload" type="file" onChange={handleFileInput} />
            <input type="submit" />
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default ProfileAdmin;
