import React, {useState} from 'react';
import axios from 'axios';
import Modal from 'components/modal/modal.component';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const FileUploader = ({ toggleModal, modalStatus, url }) => {
    /* Is file loaded state */
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileInput = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    /* Upload new photo */
    const submitForm = (event) => {
      event.preventDefault();
  
      const data = new FormData();
      data.append('photo', selectedFile);
  
      axios
        .patch('/users/profile', data)
        .then((res) => {
          console.log(res.response);
        })
        .catch((err) => console.log(err.response.data.message));
    };
  
    /* Modal Styles */
    const customStyles = {
      content: {
        width: '40vw',
        height: '70vh',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
      },
    };
  
    return (
      <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
        <div className="upload__photo">
          <div className="upload__photo__header">
            <h3>Upload Picture</h3>
            <Icon icon={'times'} onClick={toggleModal} />
          </div>
  
          <hr />
          <form onSubmit={submitForm}>
            <label htmlFor="file-upload" className="custom-file-upload">
              Select Photo
            </label>
            <input id="file-upload" type="file" onChange={handleFileInput} />
            <input type="submit" />
          </form>
        </div>
      </Modal>
    );
};

export default FileUploader;