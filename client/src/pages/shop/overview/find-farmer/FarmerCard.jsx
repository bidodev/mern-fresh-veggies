import React from 'react';
import { Link } from 'react-router-dom';
import './FarmerCard.styles.scss';

/* Ion Icons Imports */
import IosPin from 'react-ionicons/lib/IosPin';
// import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
// import IosArrowBack from 'react-ionicons/lib/IosArrowBack';

const FarmerCard = ({ farmer, match }) => {
  return (
    <Link key={farmer._id} to={`${match.url}/farmer/${farmer.slug}`}>
      <div className="find-farmer__container__item">
        <div className="find-farmer__container__item__bg-image-container">
          <img
            src={`/uploads/${farmer.name.toLowerCase()}/images/gallery/${farmer.images.gallery[1].path}`}
            alt="background"
          />
        </div>

        <div className="find-farmer__container__item--ratings">⭐⭐⭐⭐⭐</div>
        <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
        <div className="find-farmer__container__item__location">
          <IosPin fontSize="15px" color="white" className="find-farmer__container__item__location--icon" />
          Berlin, GERMANY
        </div>

        <div className="find-farmer__container__item__avatar-container">
          <img
            src={`/uploads/${farmer.name.toLowerCase()}/images/profile/${farmer.images.profile}`}
            alt="farmer-avatar"
          />
        </div>
      </div>
    </Link>
  );
};

export default FarmerCard;
