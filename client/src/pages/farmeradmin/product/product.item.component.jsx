import React, { useState } from 'react';
import './product.item.styles.scss';
/* Component Imports */
import Modal from 'pages/farmeradmin/wrapper/stock/node_modules/components/modal/modal.component';
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
      <div className="product-item__farmer-products__card" onClick={toggleModal}>
        <div className="product-item__farmer-products__card__img-container">
          <img
            src={`/images/users/${photo}`}
            alt="img"
            className="product-item__farmer-products__card__img-container--img"
          />
        </div>
        <h3 className="product-item__farmer-products__card--name">{name}</h3>
        <span className="product-item__farmer-products__card--inventory">Stock: 10</span>
        <span className="product-item__farmer-products__card--price">Price: EUR 1.5</span>
      </div>

      {/*Loading the content inside of the modal, passing the data  */}
      <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
        <Icon icon="times" className="fa-times" onClick={toggleModal} />
        <h2 className="display-product__name">{name}</h2>
        <div className="display-product__img-container">
          <img src={`/images/users/${photo}`} alt="img" className="display-product__img-container--img" />
        </div>
        <div className="display-product__type">{type}</div>
        <div className="display-product__description">{description}</div>
        <div className="display-product__delete-container">
          <span className="display-product__delete-container--text">Delete Item: </span>
          <Icon icon="trash" onClick={() => removeProduct(_id)} className="display-product__delete-container--icon" />
        </div>
      </Modal>
    </>
  );
}

export default Product;
