import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { getStockProducts } from 'utils/services';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import AddForm from 'components/forms/add-product/add.product.component';
import DisplayModal from 'components/modal/modal.component';
import ProductList from 'pages/farmeradmin/stock/productlist/ProductList';

/* Styles */
import './stock.styles.scss';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="stock-search-wrapper">
      <div className="search">
        <input type="search" className="searchTerm" placeholder="What are you looking for?" onChange={handleChange} />
        <button type="submit" className="searchButton">
          <Icon icon={['fas', 'search']} />
        </button>
      </div>
    </div>
  );
};

const Stock = () => {
  const [isFetchingData, setFetchError] = useState(true);
  const [products, setProducts] = useState([]);

  /* Filter products */
  const [searchProductField, setFilterProduct] = useState('');
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProductField.toLowerCase())
  );

  /* Modal */
  const modalStatus = useSelector(({ modal }) => modal.show);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch({ type: 'TOGGLE_MODAL' });

  useEffect(() => {
    getStockProducts().then((data) => {
      setProducts(data);
      setFetchError(false);
    });
  }, []);

  const modalConfig = {
    modalStatus: modalStatus,
    closeModal: toggleModal,
    className: 'authentication-modal',
    overlayClassName: 'authentication-modal--overlay',
  };

  return (
    <section className="stock" id="#stock">
      <div className="stock-overview__header">
        <h2>Stock Overview</h2>
        <SearchBar onSearch={setFilterProduct} />
      </div>
      <div className="stock-overview">{isFetchingData ? <Spinner /> : <ProductList products={filterProducts} />}</div>
      <Icon icon={['fas', 'plus']} onClick={toggleModal} className="stock-overview__plus" />

      <DisplayModal {...modalConfig}>
        {/* Modal Children */}
        <AddForm />
        <Icon icon="times" className="fa-times" onClick={toggleModal} />
      </DisplayModal>
    </section>
  );
};

export default Stock;
