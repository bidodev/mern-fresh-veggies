import React, { useState }  from 'react';
import { limitResults } from 'utils/limiteDesc';
import LoadProductInsideModal from './LoadProductInsideModal';

/* Component Farmer Products Item */
const ProductItem = ({ product, farmerName }) => {
  const {name, photo, type, description } = product;


  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  /* Handle Product Click */
  const handleProductClick = () => {
    //TODO: load the product of the farmer
    //1. Load the modal and load the data
    setIsOpen(!modalStatus);
    //setQuantity(1);
  };

  return (
    <>
      <div className="profile-page__farmer-products__card" onClick={handleProductClick}>
        <h3 className="profile-page__farmer-products__card--name">{name}</h3>
        <div className="profile-page__farmer-products__card__img-container">
          <img
            src={`/uploads/${farmerName.toLowerCase()}/images/products/${photo}`}
            alt="img"
            className="profile-page__farmer-products__card__img-container--img"
          />
        </div>
        <span className="profile-page__farmer-products__card--type">Type: {type}</span>
        <p className="profile-page__farmer-products__card--description">{limitResults(description, 120)}</p>
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
