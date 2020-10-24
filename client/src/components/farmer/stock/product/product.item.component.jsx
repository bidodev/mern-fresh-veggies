import React, { useState } from 'react';
import './product.item.styles.scss'
/* Component Imports */
import Modal from 'components/modal/modal.component';
import axios from 'axios';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

function Product({ _id, name, photo, type, description }) {

  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);

  const toogleModal = () => {
    setIsOpen(!modalStatus);
  };

  const removeProduct = async (id) => {
    const url = `/farmers/products/${id}`;

    axios
      .delete(url)
      .then(() => {
        toogleModal()
      })
      .catch((error) => console.log('Error deleting product', error.response.data));
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
      <div className="profile-page__farmer-products__card" onClick={toogleModal}>
        <h3 className="profile-page__farmer-products__card--name">{name}</h3>
        <div className="profile-page__farmer-products__card__img-container">
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
      <Modal modalStatus={modalStatus} closeModal={toogleModal} styles={customStyles}>
        <Icon icon="times" className="fa-times" onClick={toogleModal} />
        <h3>Id: {_id}</h3>
        <h3>Product: {name}</h3>
        <p>{description}</p>
        <p>Delete Item: </p>
        <Icon icon="trash" onClick={() => removeProduct(_id)} />
        <img
          src={`/images/users/${photo}`}
          alt="img"
          className="profile-page__farmer-products__card__img-container--img"
        />
        <h5>Id: {_id}</h5>
        <h3>Product: {name}</h3>
        <p>Description: {description}</p>
      </Modal>
    </>
  );
}

export default Product;
