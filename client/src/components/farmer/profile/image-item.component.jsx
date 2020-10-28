import React, { useState } from 'react';
import './image.item.styles.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import FileUploader from 'utils/fileUploader';

function ImageItem({ img }) {
  /* Modal State */
  const [modalStatus, setIsOpen] = useState(false);

  /* Toggle Modal function */
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  const { name, path } = img;

  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  // URL to patch the profile photo
  const url = '/users/images';

  return (
    <>
      <div
        className="admin__painel__gallery"
        onClick={toggleModal}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        <img src={`/images/${path}`} alt={name} className="gallery-img" />
        {isHovering && (
          <div>
            <li>
              <Icon icon={'camera'} />
            </li>
          </div>
        )}
      </div>
      <FileUploader toggleModal={toggleModal} modalStatus={modalStatus} url={url} />
    </>
  );
}

export default ImageItem;
