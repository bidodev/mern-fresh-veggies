import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ShowModal({ modalStatus, closeModal, children }) {
  return (
    <div>
      <Modal isOpen={modalStatus} onRequestClose={closeModal} style={customStyles}>
        {children}
      </Modal>
    </div>
  );
}

export default ShowModal;
