// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';

//import { loadAdminPanelData } from 'utils/services';

/* Import themes */
import THEMES from 'settings/public-profile/Themes';

/* React Router Dom */
import { Route, Routes } from 'react-router-dom';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Aside from 'pages/farmeradmin/aside/asidebar.component';
import ProfileAdmin from 'pages/farmeradmin/home/ProfileAdmin';
import Stock from 'pages/farmeradmin/stock/stock.component';
import FarmerSettings from 'pages/farmeradmin/settings/settings.component';

/**
 * Using React.memo
 * We don't need to reload the parent every time the children update
 */

const FarmerAdmin = React.memo(() => {
  const color = useSelector(({ status }) => status.color);

  return (
    <>
      {/* TODO: Implement the logic to change the THEME */}
      {/* TODO: Check weather ShopNavBar should be child or not of the farmer-admin*/}
      <ShopNavBar />
      <section className={`farmer-admin ${THEMES[color]}`}>
        <Aside />
        <Routes>
          <Route index element={<ProfileAdmin />} />
          <Route path="stock" element={<Stock />} />
          <Route path="settings/*" element={<FarmerSettings />} />
        </Routes>
      </section>
    </>
  );
});

export default FarmerAdmin;
