import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';
import Spinner from 'components/UI/spinner/spinner.component';
import AddForm from 'components/forms/add-product/add.product.component';
import DisplayModal from 'components/modal/modal.component';

import ProductList from 'pages/farmeradmin/stock/productlist/ProductList';

/* Styles */
import './stock.styles.scss';

const Stock = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setFetchError] = useState(true);

  /* Modal */
  const modalStatus = useSelector(({ modal }) => modal.show);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch({ type: 'TOGGLE_MODAL' });

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

  const modalConfig = {
    modalStatus: modalStatus,
    closeModal: toggleModal,
    className: 'authentication-modal',
    overlayClassName: 'authentication-modal--overlay',
  };

  return (
    <section className="stock">
      <h2 className="stock__overview--header">Stock Overview</h2>
      <div className="stock__overview">
        {isLoading ? <Spinner /> : <ProductList products={products} />}
        <CustomButton type="button" onClick={toggleModal}>
          Add
        </CustomButton>
        {/* Load a Modal with the children inside <Modal> </Modal> */}
      </div>
      <DisplayModal {...modalConfig}>
        <AddForm />
        <FontAwesomeIcon icon="times" className="fa-times" onClick={toggleModal} />
      </DisplayModal>
    </section>
  );
};

export default Stock;
