import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/* Styles */
import './find.farmer.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';

const FindYourFarmer = ({ match }) => {
  const [isLoading, setStatusLoading] = useState(true);
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios(`/farmers`)
      .then(({ data }) => {
        setFarmers(data.data.farmers);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(farmers);

  return (
    <section className="find-farmer">
      <h2 className="find-farmer__header">MEET OUR VENDORS</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="find-farmer__container">
          {farmers.map((farmer) => (
            <Link key={farmer._id} to={`${match.url}/farmer/${farmer._id}`}>
              <li className="find-farmer__container__item">
                <div className="find-farmer__container__item__bg-image-container">
                  <img src="/images/farm-1.jpg" alt="background" />
                </div>
                <div className="find-farmer__container__item__avatar-container">
                  <img
                    src={`/uploads/${farmer.name.toLowerCase()}/images/profile/${farmer.images.profile}`}
                    alt="farmer-avatar"
                  />
                </div>
                <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
                <div className="find-farmer__container__item__location">
                  <div className="find-farmer__container__item__location--city">Berlin</div>
                  <div className="find-farmer__container__item__location--country">Germany</div>
                </div>
                <div className="find-farmer__container__item--description">{farmer.description}</div>
              </li>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default FindYourFarmer;
