import React, { useState } from 'react';

/* Component Imports */
import Modal from 'components/modal/modal.component';

/* Styles */
import './product.item.styles.scss';

function Product({ _id, name, cover, type, description }) {
  const [modalStatus, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('Hello');
  };

  const customStyles = {
    content: {
      width: '70vw',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <div className="product-item__farmer-products__card" onClick={openModal}>
        <h3 className="product-item__farmer-products__card--name">{name}</h3>
        <div className="product-item__farmer-products__card__img-container">
          <img
            src={`/images/products/${cover}`}
            alt="img"
            className="product-item__farmer-products__card__img-container--img"
          />
        </div>
        <span className="product-item__farmer-products__card--type">Type: {type}</span>
        <p className="product-item__farmer-products__card--description">Information: {description}</p>
      </div>
      <Modal modalStatus={modalStatus} closeModal={closeModal} styles={customStyles}>
        {/*Loading the content inside of the modal, passing the data  */}
        <h5>Id: {_id}</h5>
        <h3>Product: {name}</h3>
        <p>Description: {description}</p>
        {/* Can display a "x" svg like Simona did */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Product;
