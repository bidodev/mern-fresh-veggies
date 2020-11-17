import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { limitResults } from 'utils/limiteDesc';

/* Component Imports */
import DisplayModal from 'components/modal/modal.component';

const LoadProductInsideModal = ({ modalStatus, toggleModal, product, farmerName }) => {
  const { _id, name, photo, type, description, price, unity } = product;

  const handleAddtoCart = (id) => {
    const farmerId = 1;
    dispatch({ type: 'ADD_ITEM', payload: { id, name, quantity, farmerId, price } });
  };

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <DisplayModal
      modalStatus={modalStatus}
      closeModal={toggleModal}
      className={'modal__addproduct'}
      overlayClassName={'overlay__addproduct'}
    >
      <div className="add__product_wrapper">
        <div className="product__photo">
          <div className="product__photo--img">
            <img src={`/uploads/${farmerName.toLowerCase()}/images/products/${photo}`} alt="img" />
          </div>
          <div className="product__photo__quantity">
            <Icon
              icon={'minus'}
              onClick={() => {
                return quantity > 1 ? setQuantity(quantity - 1) : quantity;
              }}
            />
            {quantity}
            <Icon icon={'plus'} onClick={() => setQuantity(quantity + 1)} />
          </div>
        </div>
        <div className="product__description">
          <h2>{name}</h2>
          <h5>Type: {type}</h5>
          <p>{description}</p>
          <div className="product__description__add">
            <div className="button" onClick={() => handleAddtoCart(_id)}>
              <Icon icon="plus" />
              Add to Card
            </div>
            <div>
              EUR: {price} {unity}
            </div>
          </div>
        </div>
      </div>
    </DisplayModal>
  );
};

/* Component Farmer Products Item */
const ProductItem = ({ product, farmerName }) => {
  const { _id, name, photo, type, description, price, unity } = product;

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
