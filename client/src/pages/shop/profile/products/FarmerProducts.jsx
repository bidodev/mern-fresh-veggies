import React from 'react';

/* Styles */
import './farmer.products.styles.scss';
import ProductItem from './ProductItem';

/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  const { name, products } = farmer;

  const ProductList = ({ products }) => {
    return products.map((product) => <ProductItem key={product._id} product={product} farmerName={farmer.name} />);
  };

  return (
    <React.Fragment>
      <section className="profile-page">
        <h2 className="profile-page__header">{name}'s available products</h2>
        {
          <div className="profile-page-farmer__products">
            {products.length > 0 ? <ProductList products={products} /> : (<div className='profile-page-farmer__empty-store'><h3>{name} did not add products to his store!!</h3></div>)}
          </div>
        }
      </section>
    </React.Fragment>
  );
};

export default FarmerProducts;

/**
 *
 *
 */
