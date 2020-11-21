import React from 'react'

const EmptyStore = ({ name }) => {
    return (
      <div className="farmer-profile__section-products-farmer__empty-store">
        <p>{name} did not add products to the store!!</p>
      </div>
    );
  };

export default EmptyStore;
