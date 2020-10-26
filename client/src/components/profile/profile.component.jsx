import React from 'react';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';

/* Styles */
import './profile.styles.scss';

const Profile = ({ photo, name, description }) => {
  return (
    <section className="profile">
      <div className="profile__profile-container">
        <h2 className="profile__profile-container--header">PROFILE</h2>
        <div className="profile__profile-container__information">
          <div className="profile__profile-container__information--avatar">
            <img src={`/images/users/${photo}`} alt="avatar" className="avatar-img" />
          </div>
          <div className="profile__profile-container__information--biography">
            {name} <br />
            🐰🥕🧑‍🌾🚜 <br />
            {description}
          </div>
        </div>
        <div className="profile__rate">
          <div className="profile__rate--stars"> Rate: ⭐⭐⭐⭐⭐ (number of rates)</div>
          <CustomButton>RATE</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Profile;
