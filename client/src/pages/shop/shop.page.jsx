import React, {useEffect, useState} from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import axios from 'axios';

import './shop.styles.scss';

function Farmer() {

  let { farmer } = useParams();

  axios(`/farmers/${farmer}`).then((farmer) => {
    console.log(farmer)
  })

  return (
    <h3>Requested farmer ID: {farmer}</h3>
  
    // query the specific farm and show his profile


  );
}

function Shop() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Shop</h2>

      {/* The Shop page has its own <Switch> with more routes
          that build on the /Shop URL path. You can think of the
          2nd <Route> here as an "index" page for all Shop, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route exact path={`${match.path}/:farmer`}>
          <Farmer />
        </Route>
        <Route path={match.path}>
          <h3>List all Farmers.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Shop;
