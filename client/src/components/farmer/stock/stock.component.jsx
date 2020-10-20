import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from 'components/custom-button/custom-button.component';
import Spinner from 'components/spinner/spinner.component';
import AddForm from 'components/forms/add-product.component';
import './stock.styles.scss';

ReactModal.setAppElement('#root');
const Stock = ({ jwt }) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

  /// style for the modal:
  const customStyles = {
    content: {
      width: '70%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <CustomButton type="button" onClick={() => setIsOpen(!modalIsOpen)}>
          Add
        </CustomButton>

        {modalIsOpen && (
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(!modalIsOpen)}
            //shouldCloseOnOverlayClick={!modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <AddForm />
            <FontAwesomeIcon
              icon="times"
              className="fa-times"
              onClick={() => setIsOpen(!modalIsOpen)}
            />
          </ReactModal>
        )}
      </div>
    </section>
  );
};

export default Stock;
