import React from 'react';

import Reviews from 'components/reviews/reviews.component';

import './profile.styles.scss';

const Profile = () => {
  return (
    <section className="profile">
      <h2>Profile section</h2>
      <Reviews />
    </section>
  );
};

export default Profile;
