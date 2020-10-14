import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';

import Landing from 'pages/landing/landing.page';
import Authentication from 'pages/authentication/authentication.page';
import Shop from 'pages/shop/shop.page';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" exact component={Landing} />
        <Route exact path="/authentication" exact component={Authentication} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
