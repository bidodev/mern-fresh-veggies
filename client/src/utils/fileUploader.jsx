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
import UploadButton from './UploadButton';

import './fileUploader.styles.scss';

const FileUploader = ({ toggleModal, modalStatus, photo, heading, classes, photoName }) => {
  /* Load the userProfile image */
  const [imagePreview, setImagePreview] = useState(photo);

  /* The loaded file */
  const [file, setFile] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

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

  /**
   * Crop images
   */
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const saveCropedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imagePreview, croppedAreaPixels);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, imagePreview]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  /* After crop send the photo to Multer */
  const handleImageUpload = (event) => {
    event.preventDefault();

    //lets crop the image
    saveCropedImage();

    let URL = '/users/profile';

    let data = new FormData();
    data.append('name', photoName);
    data.append('update', heading.toLowerCase());
    data.append('photo', file);
    //data.append('photo', croppedImage)
    //TODO: the blob is not beeing handled by Mutler

    axios
      .patch(URL, data)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <Modal
      modalStatus={modalStatus}
      closeModal={toggleModal}
      className={'file-uploader__modal'}
      overlayClassName={'file-uploader__overlay'}
    >
      <div className="upload-photo">
        <div className="upload-photo__header">
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
        <form onSubmit={(e) => handleImageUpload(e)} className="file__uploader">
          <UploadButton onSelectFile={onSelectFile} />
          <div>
            <Button variant="contained" color="primary" classes={{ root: classes.cropButton }}>
              Reset
            </Button>
            <Button
              onClick={handleImageUpload}
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
