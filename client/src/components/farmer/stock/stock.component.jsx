import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CustomButton from 'components/custom-button/custom-button.component';
import Spinner from 'components/spinner/spinner.component';

import './stock.styles.scss';

const Stock = ({jwt}) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/farmers/products`);
      const [products] = data.products;
      setProducts(products.products);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="stock">
      <div className="stock__overview">
        <h2 className="stock__overview--header">STOCK OVERVIEW</h2>
        <div className="stock__overview--products">
          {products ? (
            products.map((product) => (
              <div key={product._id}>
                <h2>{product.name}</h2>
                <h2>{product.description}</h2>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
        <CustomButton type="button">Add</CustomButton>
      </div>
    </section>
  );
};

export default Stock;
