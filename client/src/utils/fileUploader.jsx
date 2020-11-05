import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Modal from 'components/modal/modal.component';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

//import Slider from '@material-ui/lab'
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
//import {Slider} from '@material-ui/lab';

import './fileUploader.styles.scss';

const FileUploader = ({ toggleModal, modalStatus, photo, heading }) => {
  const url = `/images/users/${photo}`;

  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(url);

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  /* Upload new photo */
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('photo', file);

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
      padding: '0',
      height: '70vh',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
      <div className="upload__photo">
        <div className="upload__photo__header">
          <h3>{heading}</h3>
          <Icon icon={'times'} onClick={toggleModal} />
        </div>
        <hr />

        <div className="display__preview">
          <div className="crop-container">
            <Cropper
              image={imagePreviewUrl}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="controls">
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => setZoom(zoom)}
              classes={{ container: 'slider' }}
            />
          </div>
        </div>
        <hr />
        <form onSubmit={(e) => handleSubmitForm(e)} className="file__uploader">
          <input className="fileInput" type="file" onChange={(e) => handleImageChange(e)} />
          <div>
            <button className="submitButton" type="reset" onClick={() => setImagePreviewUrl(null)}>
              Clear
            </button>
            <button className="submitButton" type="submit" onSubmit={(e) => handleSubmitForm(e)}>
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FileUploader;
