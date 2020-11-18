import React, { useState} from 'react';

/* Styles */
import './farmer.products.styles.scss';
import ProductItem from './ProductItem';
import SearchBar from 'components/search/SearchBar';

const FiltersItem = () => {
  return (
    <h1></h1>
  )
}

/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  const { name, products } = farmer;

  const [searchProductField, setFilterProduct] = useState('');

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProductField.toLowerCase())
  );

  const ProductList = () => {
    return filterProducts.map((product) => <ProductItem key={product._id} product={product} farmerName={farmer.name} />);
  };

  return (
    <React.Fragment>
      <section className="profile-page">
        <h2 className="profile-page__header">{name}'s available products</h2>
        <div className="profile-page__header__filters">
          <SearchBar onSearch={setFilterProduct} />
          <FiltersItem />
        </div>
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