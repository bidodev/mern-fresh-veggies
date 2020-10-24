import React, { useState } from 'react';
import Modal from 'components/modal/modal.component';

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
      width: '50rem',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <div className="profile-page__farmer-products__card" onClick={openModal}>
        <h3 className="profile-page__farmer-products__card--name">{name}</h3>
        <div className="profile-page__farmer-products__card__img-container">
          <img
            src={`/images/products/${cover}`}
            alt="img"
            className="profile-page__farmer-products__card__img-container--img"
          />
        </div>
        <span className="profile-page__farmer-products__card--type">Type: {type}</span>
        <p className="profile-page__farmer-products__card--description">Information: {description}</p>
      </div>
      <Modal modalStatus={modalStatus} closeModal={closeModal} styles={customStyles}>
        {/*Loading the content inside of the modal, passing the data  */}
        <h3>Id: {_id}</h3>
        <h3>Product: {name}</h3>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Product;
