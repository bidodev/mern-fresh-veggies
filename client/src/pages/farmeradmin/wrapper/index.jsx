import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

/* Import themes */
import THEMES from 'settings/public-profile/Themes';

/* React Router Dom */
import { Route } from 'react-router-dom';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Aside from 'pages/farmeradmin/aside/asidebar.component';
import ProfileAdmin from 'pages/farmeradmin/home/ProfileAdmin';
import Stock from 'pages/farmeradmin/stock/stock.component';
import FarmerSettings from 'pages/farmeradmin/settings/settings.component';

/* Styles */
import './admin.page.styles.scss';

/**
 * Using React.memo
 * We don't need to reload the parent every time the children update
 */

 
const FarmerAdmin = React.memo(({ match }) => {

  const dispatch = useDispatch();
  const farmerData = useSelector((state) => state.login.adminPanelData);
  const [isLoading, setIstLoading] = useState(true);

  console.log()

  /* Retrieve Farmer Panel */
  useEffect(() => {
    axios
      .get('/farmers/admin/panel')
      .then(({ data }) => {
        dispatch({ type: 'SET_FARMER', payload: data.data });
        setIstLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert('etwas ist schief gelaufen');
      });
  }, []);

  return (
    <>
      <section className={`farmer-admin ${farmerData.config.color ? THEMES[farmerData.config.color] : THEMES['default']}`}>
        <ShopNavBar match={match} />
        <Aside />
        <Route exact path={`${match.path}`} component={ProfileAdmin} />
        <Route path={`${match.path}/stock`} component={Stock} />
        <Route path={`${match.path}/settings`} render={({ match }) => <FarmerSettings match={match} />} />
      </section>
    </>
  );
});

export default FarmerAdmin;
