import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Profile from 'components/farmer/profile/profile.component';
import Stock from 'components/farmer/stock/stock.component';

import './farmer.admin.page.styles.scss';

//here the farmer will have all configurations avaiable, update his profile and so on
const FarmerAdmin = ({ user }) => {
  return (
    <section className="farmer-admin">
      <h1>Farmer Admin Page</h1>
      <Profile farmerData={user.data}/>
      <Stock jwt={user.jwt}/>
    </section>
  );
};

export default FarmerAdmin;
