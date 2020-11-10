import React from 'react';
import ProductItem from 'pages/farmeradmin/stock/product/ProductItem';

function ProductList({ products }) {
  return (
    <div className="stock__farmer-products">
      {products.length > 0 ? (
        products.map((product) => <ProductItem key={product._id} {...product} />)
      ) : (
        <h2>You don't have any products</h2>
      )}
    </div>
  );
}

export default ProductList;
