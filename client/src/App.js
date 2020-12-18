import React, { Suspense } from 'react';

/* Redux */
import { useSelector } from 'react-redux';

/* React Router Dom */
import { Route, Switch } from 'react-router-dom';

/* Utils */
import ScrollIntoView from 'components/UI/ScrollIntoView';

/* Page Imports */
const Landing = React.lazy(() => import('pages/landing/landing.page'));
const PreAdminPanel = React.lazy(() => import('pages/preadminpanel/wrapper'));
const FarmerAdmin = React.lazy(() => import('pages/farmeradmin/wrapper'));
const Shop = React.lazy(() => import('pages/shop/shop.page'));

//import Checkout from 'pages/checkout/checkout.page';
//import SuccessAnimation from 'components/UI/success/success.component';

/* App wrapper */
const App = () => {
  /* Pull out the userFarmer from the redux state */
  const currentUser = useSelector(({ login }) => login.user);

  return (
    <>
      <ScrollIntoView>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/shop" render={({ match }) => <Shop match={match} />} />
            {/* <Route path="/checkout" render={({ match }) => <Checkout match={match} />} /> */}
            {/* <Route path="/success" render={({ match }) => <SuccessAnimation match={match} />} /> */}
            <Route
              path="/farmer/admin"
              render={({ match }) =>
                /* 
            <FarmerAdmin/> is displayed only when the farmer is logged
            While using the render Method, you can pass other props besides match such as location
            */
                currentUser && currentUser.data.role === 'farmer' ? (
                  <FarmerAdmin match={match} />
                ) : (
                  <PreAdminPanel match={match} />
                )
              }
            />
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </>
  );
};

export default App;
