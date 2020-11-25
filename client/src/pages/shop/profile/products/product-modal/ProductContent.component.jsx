import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './ProductContent.styles.scss';

const ProductContent = ({ product, onClose, slug }) => {
  const { _id, name, photo, type, description, price, unit } = product;
  const farmerId = 1;

  const [success, setSuccess] = useState(null);
  const [isAdding, setIsadding] = useState(null);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleShowMoreProducts = (id, farmerId) => {
    setIsadding(true);
    dispatch({ type: 'ADD_ITEM', payload: { id, name, quantity, farmerId, price, unit } });

    setTimeout(() => {
      setIsadding(false);
      setSuccess(true);
    }, 1000);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="add-product-wrapper">
      <span className="add-product-wrapper__close" onClick={onClose}>
        x
      </span>
      <div className="add-product-wrapper__left-section">
        <div className="add-product-wrapper__left-section__img-container">
          <img
            src={`/uploads/${slug.toLowerCase()}/images/products/${photo}`}
            alt="product"
            className="add-product-wrapper__left-section__img-container--img"
          />
        </div>
      </div>

      <div className="add-product-wrapper__right-section">
        <h2 className="add-product-wrapper__right-section--name">{name}</h2>
        <div className="add-product-wrapper__right-section--type">{type}</div>
        <div className="add-product-wrapper__right-section--description">{description}</div>
        <div className="add-product-wrapper__right-section--price">
          € {price} /{unit}
        </div>
        <div className="add-product-wrapper__right-section__quantity">
          <Icon
            icon={'minus'}
            onClick={() => {
              return quantity > 1 ? setQuantity(quantity - 1) : quantity;
            }}
          />
          {quantity}
          <Icon icon={'plus'} onClick={() => setQuantity(quantity + 1)} />
        </div>
        <div className="add-product-wrapper__right-section__adding">
          <button
            className={`add-product-wrapper__right-section__adding--btn ${isAdding ? 'loading' : ''}`}
            onClick={() => handleShowMoreProducts(_id, farmerId)}
          >
            {success ? (
              <>
                <p>Success</p>
              </>
            ) : (
              <p>
                <Icon icon="plus" className="add-product-wrapper__right-section__adding--icon" />
                Add to Cart
              </p>
            )}
          </button>
        </div>
        {/* <div className="add-product-wrapper__right-section__success"></div> */}
      </div>
    </div>
  );
};

export default ProductContent;
