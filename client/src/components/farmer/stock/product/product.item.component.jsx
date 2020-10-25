import React, { useState } from 'react';
import './product.item.styles.scss';
/* Component Imports */
import Modal from 'components/modal/modal.component';
import axios from 'axios';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function Product({ _id, name, photo, type, description }) {
  console.log(_id);
  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  const removeProduct = async (id) => {
    const url = `/farmers/products/${id}`;
    axios
      .delete(url)
      .then(() => {
        toggleModal();
      })
      .catch((error) => console.log('Error deleting product', error.response.data));
  };

  const customStyles = {
    /* Modal Styles */
    content: {
      width: '50vw',
      height: '70vh',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <div className="product-item__farmer-products__card" onClick={toggleModal}>
        <h3 className="product-item__farmer-products__card--name">{name}</h3>
        <div className="product-item__farmer-products__card__img-container">
          <img
            src={`/images/users/${photo}`}
            alt="img"
            className="product-item__farmer-products__card__img-container--img"
          />
        </div>
        <span className="product-item__farmer-products__card--type">Type: {type}</span>
        <p className="product-item__farmer-products__card--description">Information: {description}</p>
      </div>

      {/*Loading the content inside of the modal, passing the data  */}
      <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
        <Icon icon="times" className="fa-times" onClick={toggleModal} />
        <h3>Product: {name}</h3>
        <p>{description}</p>
        <p>Delete Item: </p>
        <Icon icon="trash" onClick={() => removeProduct(_id)} />
        <div className="display__product__img__wrapper">
          <img src={`/images/users/${photo}`} alt="img" />
        </div>
      </Modal>
    </>
  );
}

export default Product;
