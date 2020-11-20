import React from 'react'

const EmptyStore = ({ name }) => {
    return (
      <div className="farmer-profile__section-products-farmer__empty-store">
        <h3>{name} did not add products to his store!!</h3>
      </div>
    );
  };

export default EmptyStore;
