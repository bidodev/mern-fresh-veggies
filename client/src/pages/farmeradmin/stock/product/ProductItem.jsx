import React, { useState } from 'react';
import { removeProduct } from 'utils/services';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './ProductItem.styles.scss';

/* Component Imports */
import Modal from 'components/modal/modal.component';

function Product({ _id, name, photo, type, description }) {
  const user = useSelector(({ login }) => login.user.data);

  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  const customStyles = {
    /* Modal Styles */
    content: {
      width: '60vw',
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
            src={`/uploads/${user.name.toLowerCase()}/images/products/${photo}`}
            alt="img"
            className="product-item__farmer-products__card__img-container--img"
          />
        </div>
        <h3 className="product-item__farmer-products__card--name">{name}</h3>
        <span className="product-item__farmer-products__card--inventory">Stock: 10</span>
        <span className="product-item__farmer-products__card--price">Price: EUR 1.5</span>
      </div>

      {/* Loading the content inside of the modal, passing the data */}
      <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
        <Icon icon="times" className="fa-times" onClick={toggleModal} />
        <h2 className="display-product__name">{name}</h2>
        <div className="display-product__img-container">
          <img
            src={`/uploads/${user.name.toLowerCase()}/images/products/${photo}`}
            alt="img"
            className="display-product__img-container--img"
          />
        </div>
        <div className="display-product__type">{type}</div>
        <div className="display-product__description">{description}</div>
        <div className="display-product__delete-container">
          <span className="display-product__delete-container--text">Remove item </span>
          <Icon icon="trash" onClick={() => removeProduct(_id)} className="display-product__delete-container--icon" />
        </div>
      </Modal>
    </>
  );
}

export default Product;
