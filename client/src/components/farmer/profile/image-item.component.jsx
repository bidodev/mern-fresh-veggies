import React, { useState } from 'react';
import './image.item.styles.scss';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

function ImageItem() {
  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
      setHoverStatus(!isHovering);
      console.log(isHovering)
  };

  return (
    <div
      className="admin__painel__gallery"
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <img src="/images/default.jpg" alt="img" className="gallery-img" />
      {isHovering && (
        <div>
          <li>
            <Icon icon={'camera'} />
          </li>
        </div>
      )}
    </div>
  );
}

export default ImageItem;
