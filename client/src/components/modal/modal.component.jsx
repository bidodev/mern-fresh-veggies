import React from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ShowModal = ({ modalStatus, closeModal, children, styles, className, overlayClassName }) => {
  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={closeModal}
      style={styles}
      className={className}
      overlayClassName={overlayClassName}
    >
      {children}
    </Modal>
  );
};

export default ShowModal;
