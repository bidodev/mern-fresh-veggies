// @ts-nocheck
import React, { Suspense } from 'react';

/* React Router Dom */
import { Route, Routes } from 'react-router-dom';

/* Utils */
import ScrollIntoView from 'components/UI/ScrollIntoView';

/* Page Imports */
const Landing = React.lazy(() => import('pages/landing/landing.page'));
const PreAdminPanel = React.lazy(() => import('pages/preadminpanel/wrapper'));
const Shop = React.lazy(() => import('pages/shop/shop.page'));

//import Checkout from 'pages/checkout/checkout.page';
//import SuccessAnimation from 'components/UI/success/success.component';

/* App wrapper */
const App = () => {
  /* Pull out the userFarmer from the redux state */

  return (
    <>
      <ScrollIntoView>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/farmer/admin/*" element={<PreAdminPanel />} />

            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/success" element={<SuccessAnimation />} /> */}
          </Routes>
        </Suspense>
      </ScrollIntoView>
    </>
  );
};

export default App;
