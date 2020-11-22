import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const ProductContent = ({ product, farmerName, onClose }) => {
  const { _id, name, photo, type, description, price, unit } = product;

  const handleAddToCart = (id) => {
    const farmerId = 1;
    dispatch({ type: 'ADD_ITEM', payload: { id, name, quantity, farmerId, price, unit } });
  };
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="add-product-wrapper">
      <span className="add-product-wrapper__close" onClick={onClose}>x</span>
      <div className="add-product-wrapper__left-section">
        <div className="add-product-wrapper__left-section--logo">Veggies</div>
        <div className="add-product-wrapper__left-section__img-container">
          <img
            src={`/uploads/${farmerName.toLowerCase()}/images/products/${photo}`}
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
        <div className="add-product-wrapper__right-section__button">
          <div className="add-product-wrapper__right-section__button--btn" onClick={() => handleAddToCart(_id)}>
            <Icon icon="plus" className="add-product-wrapper__right-section__button--icon" />
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
