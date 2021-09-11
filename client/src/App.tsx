import React, { Suspense } from 'react';

/* React Router Dom */
import { Route, Switch } from 'react-router-dom';

/* Utils */
import ScrollIntoView from 'components/UI/ScrollIntoView';

/* Page Imports */
const Landing = React.lazy(() => import('pages/landing/landing.page'));
const PreAdminPanel = React.lazy(() => import('pages/preadminpanel/wrapper'));
const Shop = React.lazy(() => import('pages/shop/shop.page'));

/* App wrapper */
const App: React.FC = () => {
  return (
    <>
      <ScrollIntoView>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/shop" render={({ match }) => <Shop match={match} />} />
            <Route path="/farmer/admin" render={({ match }) => <PreAdminPanel match={match} />} />
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </>
  );
};

export default App;
