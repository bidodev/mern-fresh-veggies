import React from 'react';

/* Styles */
import './reviews.styles.scss';

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews__header">YOUR REVIEWS</h2>
      <div className="reviews__container">
        {/* TO DO: Display a POPUP when a review is clicked */}
        Farmer's reviews are displayed HERE <br />
        🚀 Add POPUP on click
      </div>
    </section>
  );
};

export default Reviews;
