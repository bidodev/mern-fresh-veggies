import React from 'react';

import CustomButton from 'components/custom-button/custom-button.component';

import './stock.styles.scss';

const Stock = () => {
  return (
    <section className="stock">
      <div className="stock__overview">
        <h2 className="stock__overview--header">STOCK OVERVIEW</h2>
        <div className="stock__overview--products">
          {/* TO DO: Display a POPUP when a product is clicked */}
          Farmer's products are displayed HERE <br />
          🚀 Add POPUP on click
        </div>
        <CustomButton type="button">Add</CustomButton>
      </div>
    </section>
  );
};

export default Stock;
