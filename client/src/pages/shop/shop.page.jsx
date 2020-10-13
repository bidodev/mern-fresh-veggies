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

function Farmer() {
  let { id } = useParams();
  const [farmer, setFarmer] = useState([]);

  useEffect(() => {
    axios(`/farmers/${id}`)
      .then(({ data }) => {
        setFarmer(data.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div>
      <h3>Hello {farmer.name}</h3>
      {farmer.products
        ? farmer.products.map((product) => (
            <div>
              <h2>{product.name}</h2>
              <h3>{product.type}</h3>
              <p>{product.description}</p>
            </div>
          ))
        : <h2>This Farmer Page has no Products</h2>}
    </div>

    // query the specific farm and show his profile
  );
}

function Shop() {
  let match = useRouteMatch();

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
      <h2>Shop</h2>
      <h3>Farmers</h3>

      {farmers
        ? farmers.map((farmer) => (
            <li>
              <Link to={`${match.url}/farmer/${farmer._id}`}>
                {farmer.name}
              </Link>
            </li>
          ))
        : ''}

      {/* The Shop page has its own <Switch> with more routes
          that build on the /Shop URL path. You can think of the
          2nd <Route> here as an "index" page for all Shop, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/farmer/:id`}>
          <Farmer />
        </Route>
      </Switch>
    </div>
  );
}

export default Shop;
