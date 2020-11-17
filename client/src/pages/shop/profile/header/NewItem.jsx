import React from 'react';

const NewItem = ({ product, name }) => {
  
  return (
    <div className="new-product">
      <p>{product.name}</p>
      <div className="new-product__img">
        <img src={`/uploads/${name.toLowerCase()}/images/products/${product.photo}`} alt="" />
      </div>
      <p>
        EUR: {product.price} - {product.unit}
      </p>
    </div>
  );
}

export default NewItem;
