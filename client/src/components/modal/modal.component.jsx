import React from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ShowModal = ({ modalStatus, closeModal, children, styles, className, overlayClassName }) => {
  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={
        true
        /* Boolean indicating if the overlay should close the modal */
      }
      shouldCloseOnEsc={
        true
        /* Boolean indicating if pressing the esc key should close the modal
         Note: By disabling the esc key from closing the modal
         you may introduce an accessibility issue. */
      }
      style={styles}
      className={className}
      overlayClassName={overlayClassName}
    >
      {children}
    </Modal>
  );
};

export default ShowModal;
