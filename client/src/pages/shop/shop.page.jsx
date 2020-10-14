import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import axios from 'axios';
import './shop.styles.scss';

const FarmerOverview = ({ match }) => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios(`/farmers`)
      .then(({ data }) => {
        setFarmers(data.data.farmers);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vel!
      </header>
      <section className="featured-proucts">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        deleniti.
      </section>

      <section className="featured-farmers">
        {/* We load a previous a grid with some farmers maybe 4
           * Then we have an option to load more farmers
          
          
          */}
        <h2>Farmers</h2>
        {farmers
          ? farmers.map((farmer) => (
              <li>
                <Link to={`${match.url}/${farmer._id}`}>{farmer.name}</Link>
              </li>
            ))
          : ''}
      </section>
    </div>
  );
};

function ProfilePage() {
  let { farmerId } = useParams();
  const [farmer, setFarmer] = useState([]);

  useEffect(() => {
    axios(`/farmers/${farmerId}`)
      .then(({ data }) => {
        setFarmer(data.data);
      })
      .catch((err) => console.log(err.message));
  }, [farmerId]);

  return (
    <div>
      <h3>Hello {farmer.name}</h3>
      {farmer.products ? (
        farmer.products.map((product) => (
          <div>
            <h2>{product.name}</h2>
            <h3>{product.type}</h3>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <h2>This Farmer Page has no Products</h2>
      )}
    </div>

    // query the specific farm and show his profile
  );
}

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={FarmerOverview} />
      <Route path={`${match.path}/:farmerId`} component={ProfilePage} />
    </div>
  );
};

export default Shop;
