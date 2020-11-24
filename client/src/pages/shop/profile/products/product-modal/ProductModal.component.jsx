import React from 'react';

/* Styles */
import './ProductModal.styles.scss';

/* Component Imports */
import DisplayModal from 'components/modal/modal.component';
import ProductContent from 'pages/shop/profile/products/product-modal/ProductContent.component';

const ProductModal = ({ modalStatus, toggleModal, product, farmerName, slug }) => {
  return (
    <DisplayModal
      modalStatus={modalStatus}
      closeModal={toggleModal}
      className={'modal__add-product'}
      overlayClassName={'overlay__add-product'}
    >
      <ProductContent product={product} farmerName={farmerName} onClose={toggleModal} slug={slug} />
    </DisplayModal>
  );
};

export default ProductModal;
