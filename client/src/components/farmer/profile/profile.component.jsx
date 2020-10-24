import React, { useState, useRef } from 'react';
import axios from 'axios';

/* Component Imports */
import ReviewsAdmin from 'components/farmer/reviews/reviews.component';

/* Styles */
import './profile.styles.scss';

import Modal from 'components/modal/modal.component';

/**
 * available props: {name, photo, email, role}
 */

const ProfileAdmin = ({ photo, jwt }) => {
  const [modalStatus, setIsOpen] = React.useState(false);

  /* Upload user photo */
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('photo', selectedFile);

    console.log(data.get('photo'));
    axios
      .patch('/users/profile', data)
      .then((res) => {
        alert('File Upload success');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="profile-admin">
      <div className="profile-admin__profile-container">
        <h2 className="profile-admin__profile-container--header">YOUR PROFILE</h2>
        <div className="profile-admin__profile-container__information">
          <div className="profile-admin__profile-container__information--avatar">
            <img src={`/images/users/${photo}`} alt="avatar" className="avatar-img" onClick={openModal} />
          </div>
          <div className="profile-admin__profile-container__information--biography">
            Welcome to your profile {name} <br />
            🐰🥕🧑‍🌾🚜 <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis aliquid, nam quisquam hic vitae
            commodi! Assumenda vel reiciendis et, est delectus, sit eos tempora, amet ipsa nulla dicta iusto libero?
            Aliquid officiis tempora aliquam. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta ex quos eaque dolores, alias odio
            cupiditate? Accusantium quae harum fuga praesentium distinctio dolore maxime, repellendus qui facilis
            laborum expedita.
          </div>
        </div>
        <div className="profile-admin__profile-container__gallery">
          <div className="profile__profile-container__gallery--img">
            <img src="/images/farm-1.jpg" alt="img" className="gallery-img" />
          </div>
          <div className="profile-admin__profile-container__gallery--img">
            <img src="/images/donkey.jpg" alt="img" className="gallery-img" />
          </div>
          <div className="profile-admin__profile-container__gallery--img">
            <img src="/images/farm-3.jpg" alt="img" className="gallery-img" />
          </div>
        </div>
      </div>
      <Modal modalStatus={modalStatus} closeModal={closeModal}>
        {/* HTML that will be rendered inside the MODAL */}
        <div>
          <button onClick={closeModal}>close</button>

          <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="file" onChange={handleFileInput} />
            <button onClick={submitForm}>Submit</button>
          </form>
        </div>
      </Modal>
      <ReviewsAdmin />
    </section>
  );
};

export default ProfileAdmin;
