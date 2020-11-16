import React from 'react';

/* Styles */
import './farmer.products.styles.scss';
import ProductItem from './ProductItem'


/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  return (
    <React.Fragment>
      <section className="profile-page">
        <h2 className="profile-page--header">{farmer.name}'s available products</h2>
        {
          <div className="profile-page__farmer-products">
            {farmer.products.map((product) => (
              <ProductItem key={product._id} product={product} farmerName={farmer.name}/>
            ))}
          </div>
        }
      </section>
    </React.Fragment>
  );
};

export default FarmerProducts;
