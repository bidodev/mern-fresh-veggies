import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FindYourFarmer.styles.scss';

import Spinner from 'components/UI/spinner/spinner.component';

const FindYourFarmer = ({match}) => {
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
  console.log(farmers)
  
    return (
      <div className="shop__internal__content__find-a-farmer">
          {/* Load first 4 farmers, an option can display more */}
          <h2 className="farmer-list--header">FARMER LIST</h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="farmer-list__list-container">
              {farmers.map((farmer) => (
                <li className="farmer-list__list-container__item">
                  <Link to={`${match.url}/${farmer._id}`}>
                    <h3 className="farmer-list__list-container__item--header">{farmer.name}</h3>
                    <div className="farmer-list__list-container__item__img-container">
                      <img
                        src={`images/users/${farmer.photo}`}
                        alt="img"
                        className="farmer-list__list-container__item__img-container--img"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          )}
      </div>
    );
  };

export default FindYourFarmer


