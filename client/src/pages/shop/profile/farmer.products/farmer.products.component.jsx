import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {useSelector} from 'react-redux';

/* Styles */
import './farmer.products.styles.scss';

/* Component Imports */
import Modal from 'components/modal/modal.component';

/* Component Farmer Products Item */
const FarmerProductsItem = ({ _id, name, photo, type, description }) => {

  const user = useSelector(({ login }) => login.user.data);
  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  /* Handle Product Click */
  const handleProductClick = () => {
    //TODO: load the product of the farmer
    //1. Load the modal and load the data
    setIsOpen(!modalStatus);
    setQuantity(1);
  };

  const handleAddtoCart = (id) => {
    const farmer = 'holder';
    dispatch({ type: 'ADD_ITEM', payload: { id, name, quantity, farmer } });
  };
  return (
    <>
      <div className="profile-page__farmer-products__card" onClick={handleProductClick}>
        <h3 className="profile-page__farmer-products__card--name">{name}</h3>
        <div className="profile-page__farmer-products__card__img-container">
          <img
            src={`/uploads/${user.name.toLowerCase()}/images/products/${photo}`}
            alt="img"
            className="profile-page__farmer-products__card__img-container--img"
          />
        </div>
        <span className="profile-page__farmer-products__card--type">Type: {type}</span>
        <p className="profile-page__farmer-products__card--description">Information: {description}</p>
      </div>

      <Modal
        modalStatus={modalStatus}
        closeModal={toggleModal}
        className={'modal__addproduct'}
        overlayClassName={'overlay__addproduct'}
      >
        <div className="add__product_wrapper">
          <div className="product__photo">
            <div className="product__photo--img">
              <img src={`/uploads/${user.name.toLowerCase()}/images/products/${photo}`} alt="img" />
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
              <div>EUR 2.4</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  return (
    <React.Fragment>
      <section className="profile-page">
        <h2 className="profile-page--header">{farmer.name}'s available products</h2>
        {
          <div className="profile-page__farmer-products">
            {farmer.products.map((product) => (
              <FarmerProductsItem key={product._id} {...product} />
            ))}
          </div>
        }
      </section>
    </React.Fragment>
  );
};

export default FarmerProducts;
