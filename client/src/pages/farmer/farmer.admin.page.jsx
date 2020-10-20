import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* Component Imports */
import Profile from 'components/farmer/profile/profile.component';
import Stock from 'components/farmer/stock/stock.component';

/* Styles */
import './farmer.admin.page.styles.scss';

const FarmerAdmin = ({ user }) => {
  /* Farmer has here all available configurations: update his profile and so on */
  return (
    <section className="farmer-admin">
      <h1>Farmer Admin Page</h1>
      <Profile farmerData={user.data} />
      <Stock jwt={user.jwt} />
    </section>
  );
};

export default FarmerAdmin;
