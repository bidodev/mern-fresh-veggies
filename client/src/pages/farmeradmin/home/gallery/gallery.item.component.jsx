import React, { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './gallery.item.styles.scss';

/* Utils */
import FileUploader from 'utils/fileUploader';

const ImageItem = ({ name, path, slug }) => {
  const src = path ? `/uploads/${slug.toLowerCase()}/images/gallery/${path}` : '/uploads/default.jpg';

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
          <div className="panel-profile__gallery__image__caption">
            <li>
              <Icon icon={'camera'} />
            </li>
          </div>
        )}
      </div>
      <FileUploader
        toggleModal={toggleModal}
        heading={'Gallery'}
        modalStatus={modalStatus}
        photo={src}
        photoName={name}
      />
    </>
  );
};

export default ImageItem;
