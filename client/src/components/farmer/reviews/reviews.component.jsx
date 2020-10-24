import React from 'react';

/* Styles */
import './reviews.styles.scss';

const ReviewsAdmin = () => {
  return (
    <section className="reviews-admin">
      <h2 className="reviews-admin__header">YOUR REVIEWS</h2>
      <div className="reviews-admin__container">
        {/* TO DO: Display a POPUP when a review is clicked */}
        Farmer's reviews are displayed HERE <br />
        🚀 Add POPUP on click
      </div>
    </section>
  );
};

export default ReviewsAdmin;
