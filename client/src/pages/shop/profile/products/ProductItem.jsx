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

  return (
    <>
      <div className="profile-page-farmer__products__card" onClick={toggleModal}>
        <h3 className="profile-page-farmer__products__card--name">{name}</h3>
        <div className="profile-page-farmer__products__card__img-container">
          <img
            src={`/uploads/${farmerName.toLowerCase()}/images/products/${photo}`}
            alt="img"
            className="profile-page-farmer__products__card__img-container--img"
          />
        </div>
        <span className="profile-page-farmer__products__card--type">Type: {type}</span>
        <p className="profile-page-farmer__products__card--description">{limitResults(description, 120)}</p>
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
