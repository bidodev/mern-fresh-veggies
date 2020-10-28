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

  const { name, url } = img;

  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  return (
    <>
      <div className="admin__painel__gallery" onClick={toggleModal} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
        <img src={`/images/${url}`} alt={name} className="gallery-img" />
        {isHovering && (
          <div>
            <li>
              <Icon icon={'camera'} />
            </li>
          </div>
        )}
      </div>
      <FileUploader toggleModal={toggleModal} modalStatus={modalStatus} />
    </>
  );
}

export default ImageItem;
