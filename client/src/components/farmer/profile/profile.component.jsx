import React from 'react';

import Reviews from 'components/reviews/reviews.component';

import './profile.styles.scss';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__profile-container">
        <h2 className="profile__profile-container--header">YOUR PROFILE</h2>
        <div className="profile__profile-container__information">
          <div className="profile__profile-container__information--avatar">
            <img
              src="../../images/owen.jpg"
              alt="avatar"
              className="avatar-img"
            />
          </div>
          <div className="profile__profile-container__information--biography">
            Owen Merkel <br />
            🐰🥕🧑‍🌾🚜 <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit omnis aliquid, nam quisquam hic vitae commodi!
            Assumenda vel reiciendis et, est delectus, sit eos tempora, amet
            ipsa nulla dicta iusto libero? Aliquid officiis tempora aliquam.{' '}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dicta ex quos eaque dolores, alias odio cupiditate? Accusantium quae
            harum fuga praesentium distinctio dolore maxime, repellendus qui
            facilis laborum expedita.
          </div>
        </div>
        <div className="profile__profile-container__gallery">
          <div className="profile__profile-container__gallery--img">
            <img
              src="../../images/farm-1.jpg"
              alt="img"
              className="gallery-img"
            />
          </div>
          <div className="profile__profile-container__gallery--img">
            <img
              src="../../images/donkey.jpg"
              alt="img"
              className="gallery-img"
            />
          </div>
          <div className="profile__profile-container__gallery--img">
            <img
              src="../../images/farm-3.jpg"
              alt="img"
              className="gallery-img"
            />
          </div>
        </div>
      </div>

      <Reviews />
    </section>
  );
};

export default Profile;
