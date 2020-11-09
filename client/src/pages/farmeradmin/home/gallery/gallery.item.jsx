import React, { useState } from 'react';
import './gallery.item.styles.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Utils */
import FileUploader from 'utils/fileUploader';

const ImageItem = ({ name, path, farmerName }) => {
  const src = path === 'default.jpg' ? '/uploads/default.jpg' : `/uploads/${farmerName.toLowerCase()}/images/gallery/${path}`;

  /* Modal State */
  const [modalStatus, setIsOpen] = useState(false);

  /* Toggle Modal function */
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  return (
    <>
      <div
        className="panel-profile__gallery__image"
        onClick={toggleModal}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        <img src={`${src}`} alt={name} />
        {isHovering && (
          <div>
            <li>
              <Icon icon={'camera'} />
            </li>
          </div>
        )}
      </div>
      <FileUploader toggleModal={toggleModal} heading={'Gallery'} modalStatus={modalStatus} photo={src} photoName={name} />
    </>
  );
};

export default ImageItem;
