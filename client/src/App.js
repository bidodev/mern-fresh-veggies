import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Landing from 'pages/landing/Landing.page';
import Authentication from 'pages/authentication/Authentication.page';
import Shop from 'pages/shop/Shop.page';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/authentication" exact component={Authentication} />
        <Route path="/shop" exact component={Shop} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
