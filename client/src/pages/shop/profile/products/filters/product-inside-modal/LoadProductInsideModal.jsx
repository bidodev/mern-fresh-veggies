import React from 'react';

/* Styles */
import './LoadProductInsideModal.styles.scss';

import ProductContent from './ProductContent';

/* Component Imports */
import DisplayModal from 'components/modal/modal.component';

const LoadProductInsideModal = ({ modalStatus, toggleModal, product, farmerName }) => {

  return (
    <DisplayModal
      modalStatus={modalStatus}
      closeModal={toggleModal}
      className={'modal__add-product'}
      overlayClassName={'overlay__add-product'}
    >
      <ProductContent product={product} farmerName={farmerName} onClose={toggleModal}/>
    </DisplayModal>
  );
};

export default LoadProductInsideModal;
