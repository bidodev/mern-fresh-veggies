import React, { useState } from 'react';

import LoadProductInsideModal from '../farmer.products/LoadProductInsideModal';

const NewItem = ({ product, name }) => {
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
      <div className="new-product" onClick={handleProductClick}>
        <p>{product.name}</p>
        <div className="new-product__img">
          <img src={`/uploads/${name.toLowerCase()}/images/products/${product.photo}`} alt="" />
        </div>
        <p>
          EUR: {product.price} - {product.unit}
        </p>
      </div>
      {modalStatus && (
        <LoadProductInsideModal
          modalStatus={modalStatus}
          toggleModal={toggleModal}
          product={product}
          farmerName={name}
        />
      )}
    </>
  );
};

export default NewItem;
