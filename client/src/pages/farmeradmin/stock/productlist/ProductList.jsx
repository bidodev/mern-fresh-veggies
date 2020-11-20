import React from 'react';
import ProductItem from 'pages/farmeradmin/stock/product/ProductItem';
import { useSelector } from 'react-redux';

function ProductList({ products }) {
  const user = useSelector(({ login }) => login.user.data);
  return (
    <div className="stock__farmer-products">
      {products.length > 0 ? (
        products.map((product) => <ProductItem key={product._id} {...product} />)
      ) : (
        <h2>Sorry! You don't have any products in your cart</h2>
      )}
    </div>
  );
}

export default ProductList;
