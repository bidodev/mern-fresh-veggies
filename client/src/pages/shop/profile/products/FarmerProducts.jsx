import React, { useState, useEffect } from 'react';

/* Styles */
import './farmer.products.styles.scss';
import ProductItem from './ProductItem';
import SearchBar from 'components/search/SearchBar';

const FilterProductsDietBased = () => {
  return (
    <div className="profile-page__header__filters__diet">
      <img src="/images/diet.png" alt="diet-type" />
    </div>
  );
};
let arrayForHoldingPosts = [];
const productsPerPage = 4;

/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  const { name, products } = farmer;

  const [searchProductField, setFilterProduct] = useState('');

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchProductField.toLowerCase())
  // );

  const [isLoadingMoreItems, setIsLoadingMoreItems] = useState(false);
  const [productsToShow, setProductsToShow] = useState([]);
  const [next, setNext] = useState(4);

  const loopWithSlice = (start, end) => {
    const slicedProducts = products.slice(start, end);
    arrayForHoldingPosts = ([...arrayForHoldingPosts, ...slicedProducts]);
    setProductsToShow(arrayForHoldingPosts);
  };

  /* Our first 4 products */
  useEffect(() => {
    loopWithSlice(0, productsPerPage);
  }, []);

  const handleShowMoreProducts = () => {
    setIsLoadingMoreItems(true);

    /* faking a async function, as don't have many items, we loaded everything previous 
      TODO: If the applications growns, it's better to request from the API on demand.
    */
    setTimeout(() => {
      setIsLoadingMoreItems(false);
      loopWithSlice(next, next + productsPerPage);
      setNext(next + productsPerPage);
    }, 1500)
  };

  

  return (
    <React.Fragment>
      <section className="profile-page">
        <h2 className="profile-page__header">{name}'s available products</h2>

        {/* TODO: Don't display filters while store has no products added. */}
        <div className="profile-page__header__filters">
          <FilterProductsDietBased />
          <SearchBar onSearch={setFilterProduct} />
          <hr />
        </div>
        {
          <div className="profile-page-farmer__products">
            {products.length > 0 ? (
              productsToShow.map((product) => {
                return <ProductItem key={product._id} product={product} farmerName={farmer.name} />;
              })
            ) : (
              <div className="profile-page-farmer__empty-store">
                <h3>{name} did not add products to his store!!</h3>
              </div>
            )}
          </div>
        }
        {/* TODO: Add class loading while fetching more results */}
        <div className="profile-page-farmer__load-more">
          <button className={`absolute-center button ${isLoadingMoreItems ? "loading" : ""}`} onClick={handleShowMoreProducts}>Load more</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FarmerProducts;
