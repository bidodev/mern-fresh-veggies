import React from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ShowModal = ({ modalStatus, closeModal, children, styles }) => {
  return (
    <Modal isOpen={modalStatus} onRequestClose={closeModal} style={styles}>
      {children}
    </Modal>
  );
};

export default ShowModal;
