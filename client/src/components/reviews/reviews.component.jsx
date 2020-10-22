import React from 'react';

import CustomButton from 'components/custom-button/custom-button.component';

/* Styles */
import './reviews.styles.scss';

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews__header">REVIEWS</h2>
      <div className="reviews__container">
        Farmer's reviews are displayed HERE
      </div>
      <CustomButton>ADD</CustomButton>
    </section>
  );
};

export default Reviews;
