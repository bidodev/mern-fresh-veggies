import React, { useState }  from 'react';
import { limitResults } from 'utils/limiteDesc';
import LoadProductInsideModal from './LoadProductInsideModal';

import './ProductItem.styles.scss'

/* Component Farmer Products Item */
const ProductItem = ({ product, farmerName }) => {
  const {name, photo, type, description } = product;

  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  return (
    <>
      <div className="farmer-profile__section-products-farmer__has-products__list__card" onClick={toggleModal}>
        <h3 className="farmer-profile__section-products-farmer__has-products__list__card--name">{name}</h3>
        <div className="farmer-profile__section-products-farmer__has-products__list__card__img-container">
          <img
            src={`/uploads/${farmerName.toLowerCase()}/images/products/${photo}`}
            alt="img"
          />
        </div>
        <span className="farmer-profile__section-products-farmer__has-products__list__card--type">Type: {type}</span>
        <p className="farmer-profile__section-products-farmer__has-products__list__card--description">{limitResults(description, 120)}</p>
      </div>
      {modalStatus && (
        <LoadProductInsideModal
          modalStatus={modalStatus}
          toggleModal={toggleModal}
          product={product}
          farmerName={farmerName}
        />
      )}
    </>
  );
};

export default ProductItem;
