import React from 'react';
import './ProductsToShow.styles.scss';

import ProductItem from './ProductItem';

const ProductsToShow = ({ products, farmerName }) => {
  return (
    <div className="farmer-profile__section-products-farmer__has-products__list">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} farmerName={farmerName} />
      ))}
    </div>
  );
};

export default ProductsToShow;
