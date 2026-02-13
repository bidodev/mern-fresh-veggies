import React from 'react';

/* Styles */
import './ProductsToShow.styles.scss';

/* Component Imports */
import ProductItem from './ProductItem.component';

const ProductsToShow = ({ products, slug }: { products: any[]; slug: string }) => {
  return (
    <div className="farmer-profile__section-products-farmer__has-products__list">
      {products.map((product: any) => (
        <ProductItem key={product._id} product={product} slug={slug} />
      ))}
    </div>
  );
};

export default ProductsToShow;
