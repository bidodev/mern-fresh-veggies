import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './FarmerCard.styles.scss';

const FarmerCard = ({ farmer }) => {
  const imageSrc = `/uploads/${farmer.slug.toLowerCase()}/images/gallery/${farmer.images.gallery[1].path}`;

  return (
    <Link key={farmer._id} to={`/shop/farmer/${farmer.slug}`}>
      <div className="find-farmer__container__item">
        <div className="find-farmer__container__item__bg-image-container">
          <img src={`${imageSrc}`} alt="background" />
        </div>

        <div className="find-farmer__container__item--ratings">⭐⭐⭐⭐⭐</div>
        <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
        <div className="find-farmer__container__item__location">
          <Icon icon={['fas', 'location-dot']} className="find-farmer__container__item__location--icon" />
          Berlin, GERMANY
        </div>

        <div className="find-farmer__container__item__avatar-container">
          <img
            src={`/uploads/${farmer.slug.toLowerCase()}/images/profile/${farmer.images.profile}`}
            alt="farmer-avatar"
          />
        </div>
      </div>
    </Link>
  );
};

export default FarmerCard;
