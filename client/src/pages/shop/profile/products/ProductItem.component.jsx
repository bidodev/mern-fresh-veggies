import React, { useState } from 'react';
import { limitResults } from 'utils/limiteDesc';

/* Styles */
import './ProductItem.styles.scss';

/* Component Imports */
import ProductModal from './product-modal/ProductModal.component';

const ProductItem = ({ product, farmerName }) => {
  const { name, photo, description } = product;

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
          <img src={`/uploads/${farmerName.toLowerCase()}/images/products/${photo}`} alt="img" />
        </div>
        <p className="farmer-profile__section-products-farmer__has-products__list__card--description">
          {limitResults(description, 120)}
        </p>
      </div>
      {modalStatus && (
        <ProductModal modalStatus={modalStatus} toggleModal={toggleModal} product={product} farmerName={farmerName} />
      )}
    </>
  );
};

export default ProductItem;
