import React, { useState, useEffect } from 'react';

/* Styles */
import './FarmerProducts.styles.scss';
import LoadingMore from './product-modal/LoadingMore';
import SearchBar from 'components/search/SearchBar';
import FilterProductsDietBased from './filters/FilterProductsDietBased';
import EmptyStore from './EmptyStore';

/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  const { name, products, slug } = farmer;

  //const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchProductField, setFilterProduct] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProductField.toLowerCase())
  );

  return (
    <section className="farmer-profile__section-products">
      <h2 className="farmer-profile__section-products__header">{name}'s available products</h2>
      {products.length > 0 ? (
        <>
          <div className="farmer-profile__section-products-farmer__has-products">
            <div className="farmer-profile__section-products-farmer__has-products__filters">
              <FilterProductsDietBased />
            </div>
            <SearchBar
              onSearch={setFilterProduct}
              className={'farmer-profile__section-products-farmer__has-products__filters__search-bar'}
            />
            <hr />
            <LoadingMore products={filteredProducts} name={name} slug={slug} />
          </div>
        </>
      ) : (
        <EmptyStore name={name} />
      )}
    </section>
  );
};

export default FarmerProducts;
