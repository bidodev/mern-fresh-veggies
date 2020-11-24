import React, { useState, useEffect } from 'react';

/* Styles */
import './FarmerProducts.styles.scss';

/* Component Imports */
import FilterProductsDietBased from './filters/FilterProductsDietBased';
import SearchBar from 'components/search/SearchBar';
import ProductsToShow from './ProductsToShow.component';
import EmptyStore from './EmptyStore';

let arrayForHoldingProducts = [];
const productsPerPage = 4;

/* Component Farmer Products List */
const FarmerProducts = ({ farmer }) => {
  const { name, products, slug } = farmer;

  const [searchProductField, setFilterProduct] = useState('');

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchProductField.toLowerCase())
  // );

  const [isLoadingMoreItems, setIsLoadingMoreItems] = useState(false);
  const [productsToShow, setProductsToShow] = useState([]);
  const [next, setNext] = useState(4);

  const loopWithSlice = (start, end) => {
    const slicedProducts = products.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedProducts];
    setProductsToShow(arrayForHoldingProducts);
  };

  /* Our first 4 products */
  useEffect(() => {
    arrayForHoldingProducts = [];
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
    }, 1500);
  };

  /* if we don't have more products to load, disable the button */
  const hasMoreProductsToShow = arrayForHoldingProducts.length !== products.length;

  return (
    <React.Fragment>
      <section className="farmer-profile__section-products">
        <h2 className="farmer-profile__section-products__header">{name}'s available products</h2>

        <div className="farmer-profile__section-products-farmer__has-products">
          {products.length > 0 ? (
            <>
              <div className="farmer-profile__section-products-farmer__has-products__filters">
                <FilterProductsDietBased />
                <SearchBar
                  onSearch={setFilterProduct}
                  className={'farmer-profile__section-products-farmer__has-products__filters__search-bar'}
                />
              </div>
              <hr />
              <ProductsToShow products={productsToShow} farmerName={name} slug={slug}/>

              <div className="farmer-profile__section-products-farmer__has-products__load-more">
                {hasMoreProductsToShow && (
                  <>
                    <button
                      className={`absolute-center button ${isLoadingMoreItems ? 'loading' : ''}`}
                      onClick={handleShowMoreProducts}
                    >
                      Load more
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <EmptyStore name={name} />
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default FarmerProducts;
