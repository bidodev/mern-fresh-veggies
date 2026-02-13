import React, { useState } from 'react';
import { removeProduct } from 'utils/services';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './ProductItem.styles.scss';

/* Component Imports */
import Modal from 'components/modal/modal.component';

function Product({ _id, name, photo, type, description, quantity, price, unit }) {
  const user = useSelector(({ login }) => login.user.data);

  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  return (
    <>
      <div className="product-item__farmer-products__card" onClick={toggleModal}>
        <h2 className="product-item__farmer-products__card--name">{name}</h2>
        <div className="product-item__farmer-products__card__img-container">
          <img
            src={`/uploads/${user.slug.toLowerCase()}/images/products/${photo}`}
            alt="img"
            className="product-item__farmer-products__card__img-container--img"
          />
        </div>
        <div className="product-item__farmer-products__card--inventory">
          {quantity} /{unit} IN STOCK
        </div>
      </div>

      {/* Loading the content inside of the modal, passing the data */}
      <Modal
        modalStatus={modalStatus}
        closeModal={toggleModal}
        className={'modal__add-product'}
        overlayClassName={'overlay__add-product'}
      >
        <Icon icon="times" className="display-product__close" onClick={toggleModal} />
        <div className="display-product">
          <div className="display-product__left-section">
            <div className="display-product__left-section__img-container">
              <img
                src={`/uploads/${user.slug.toLowerCase()}/images/products/${photo}`}
                alt="img"
                className="display-product__left-section__img-container--img"
              />
            </div>
          </div>

          <div className="display-product__right-section">
            <h2 className="display-product__right-section__name">{name}</h2>
            <div className="display-product__right-section__type">{type}</div>
            <div className="display-product__right-section__description">{description}</div>
            <div className="display-product__right-section__delete-container" onClick={() => removeProduct(_id)}>
              <span className="display-product__right-section__delete-container--text">Remove </span>
              <Icon icon="trash" className="display-product__delete-container--icon" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Product;
