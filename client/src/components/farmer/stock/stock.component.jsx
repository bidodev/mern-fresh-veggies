import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Component Imports */
import CustomButton from 'components/custom-button/custom-button.component';
import Spinner from 'components/spinner/spinner.component';
import Product from './product/product.item.component';
import AddForm from 'components/forms/add.product.component';
import Modal from 'components/modal/modal.component';

/* Styles */
import './stock.styles.scss';

const Stock = () => {
  /* Modal Styles */
  const customStyles = {
    content: {
      width: '70vw',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [products, setProducts] = useState([]);
  const [isLoading, setFetchError] = useState(true);

  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/farmers/products`);
      const [products] = data.products;
      setProducts(products.products);
      setFetchError(false);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [modalStatus]);

  return (
    <section className="stock">
              <h2 className="stock__overview--header">STOCK OVERVIEW</h2>
      <div className="stock__overview">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="profile-page__farmer-products">
            {products.length > 0 ? (
              products.map((product) => <Product key={product._id} {...product} />)
            ) : (
              <h2>You don't have any products</h2>
            )}
          </div>
        )}
        <CustomButton type="button" onClick={toggleModal}>
          Add
        </CustomButton>
        {/* Load a Modal with the children inside <Modal> </Modal> */}
        <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
          <AddForm />
          <FontAwesomeIcon icon="times" className="fa-times" onClick={toggleModal} />
        </Modal>
      </div>
    </section>
  );
};

export default Stock;
