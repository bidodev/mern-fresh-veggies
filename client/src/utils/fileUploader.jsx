import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Modal from 'components/modal/modal.component';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import getCroppedImg from './cropImage';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import { styles } from './styles';

import './fileUploader.styles.scss';

const FileUploader = ({ toggleModal, modalStatus, photo, heading, classes }) => {

  /** Load the userProfile image */
  const userImg = `/images/users/${photo}`;
  const [imagePreview, setImagePreview] = useState(userImg);

  /* The loaded file */
  const [file, setFile] = useState('');

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [rotation, setRotation] = useState(0);
  
    /**
   * CroppedImag
   */
  const [croppedImage, setCroppedImage] = useState(null);

  /* 
    * Function to load an image and save the file
  */
  const onSelectFile = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let [file] = event.target.files;
    
    reader.onloadend = () => {
      setFile(file);
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  
  const saveCropedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imagePreview, croppedAreaPixels, rotation);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

    /* After crop send the photo to Multer */
    const handleSubmitForm = (event) => {
      event.preventDefault();
      console.log(croppedImage)
  
      const data = new FormData();
      data.append('photo', file);
      console.log(file);
      axios
        .patch('/users/profile', data)
        .then((res) => {
          console.log(res.response);
        })
        .catch((err) => console.log(err.response.data.message));
    };

  return (
    <Modal modalStatus={modalStatus} closeModal={toggleModal}  className={'modal__file-uploader'} overlayClassName={'overlay__file-uploader'}>
      <div className="upload__photo">
        <div className="upload__photo__header">
          <h3>{heading}</h3>
          <Icon icon={'times'} onClick={toggleModal} />
        </div>
        <hr />

        <div className="display__preview">
          <div className="crop-container">
            <Cropper
              image={imagePreview}
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
              classes={{ root: 'slider' }}
            />
          </div>
        </div>
        <hr />
        <form onSubmit={(e) => handleSubmitForm(e)} className="file__uploader">
          <input className="fileInput" type="file" onChange={(event) => onSelectFile(event)} />
          <div>
          <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.cropButton }}
            >
              Reset
            </Button>
            <Button
              onClick={saveCropedImage}
              variant="contained"
              color="primary"
              classes={{ root: classes.cropButton }}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(FileUploader);
