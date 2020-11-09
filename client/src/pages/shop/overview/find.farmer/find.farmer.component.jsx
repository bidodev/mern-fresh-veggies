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

  // Getting all farmers profile
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
      {/* Load first 4 farmers, an option can display more */}
      <h2 className="find-farmer__header">MEET OUR VENDORS</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="find-farmer__container">
          {farmers.map((farmer) => (
            <li className="find-farmer__container__item">
              <Link to={`${match.url}/${farmer._id}`}>
                <div className="find-farmer__container__item__bg-image-container">
                  <img src="/images/farm-1.jpg" alt="background" />
                </div>
                <div className="find-farmer__container__item__avatar-container">
                  <img src={`/images/users/${farmer.photo}`} alt="farmer-avatar" />
                </div>
                <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
                <div className="find-farmer__container__item__location">
                  <div className="find-farmer__container__item__location--city">Berlin</div>
                  <div className="find-farmer__container__item__location--country">Germany</div>
                </div>
                <div className="find-farmer__container__item--description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ab ipsum optio quo recusandae
                  illum? Quidem hic corporis, voluptas cum ducimus dolores accusantium alias odio, quos in sed
                  distinctio illum.
                </div>
              </Link>
            </li>
          ))}
        </div>
      )}
    </section>
  );
};

export default FindYourFarmer;
