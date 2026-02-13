import React, { useEffect, useState } from 'react';
import { getStockProducts } from 'utils/services';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import AddProduct from 'components/forms/add-product/add.product.component';
import DisplayModal from 'components/modal/modal.component';
import ProductList from 'pages/farmeradmin/stock/productlist/ProductList';
import SearchBar from 'components/search/SearchBar';

/* Styles */
import './stock.styles.scss';

const Stock = () => {
  const [isModalOpen, setModalStatus] = useState(false);
  const [products, setProducts] = useState(null);

  /* Filter products */
  const [searchProductField, setFilterProduct] = useState('');
  const filterProducts =
    products && products.filter((product) => product.name.toLowerCase().includes(searchProductField.toLowerCase()));

  /* Modal */
  const toggleModal = () => setModalStatus(!isModalOpen);

  useEffect(() => {
    getStockProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const modalConfig = {
    modalStatus: isModalOpen,
    closeModal: toggleModal,
    className: 'add-product__modal',
    overlayClassName: 'add-product__modal--overlay',
  };

  return (
    <section className="stock" id="#stock">
      <div className="stock-overview__header">
        <h2 className="stock-overview__header--title">Stock Overview</h2>
        <SearchBar onSearch={setFilterProduct} className={'stock-search-wrapper'} />
        <Icon icon={['fas', 'plus']} onClick={toggleModal} className="stock-overview__plus" />
      </div>
      <div className="stock-overview">{products ? <ProductList products={filterProducts} /> : <Spinner />}</div>

      <DisplayModal {...modalConfig}>
        {/* Modal Children */}
        <AddProduct />
        <Icon icon="times" className="fa-times" onClick={toggleModal} />
      </DisplayModal>
    </section>
  );
};

export default Stock;
