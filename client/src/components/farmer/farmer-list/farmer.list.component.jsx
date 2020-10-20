import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

/* Component Imports */
import Spinner from 'components/spinner/spinner.component';

/* Styles */
import './farmer.list.styles.scss';

const FarmerList = ({ match }) => {
  const [farmers, setFarmers] = useState([]);
  const [isLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    axios(`/farmers`)
      .then(({ data }) => {
        setFarmers(data.data.farmers);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="farmer-list">
      {/* First we load a grid with 4 farmers, then we have an option to load more */}
      <h2>FARMER LIST</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="farmer-list__list">
          {farmers.map((farmer) => (
            <li>
              <Link to={`${match.url}/${farmer._id}`}>{farmer.name}</Link>
            </li>
          ))}
        </div>
      )}
    </section>
  );
};

export default FarmerList;
