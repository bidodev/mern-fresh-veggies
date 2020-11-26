import React, { useState, useEffect } from 'react';

/* Component Imports */
import ProductsToShow from '../ProductsToShow.component';

let arrayForHoldingProducts = [];
const productsPerPage = 4;

function LoadingMore({ products, name, slug }) {
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
  }, [products]);

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
      <ProductsToShow products={productsToShow} farmerName={name} slug={slug} />

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
    </React.Fragment>
  );
}

export default LoadingMore;
