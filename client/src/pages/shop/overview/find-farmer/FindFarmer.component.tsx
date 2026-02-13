import React, { useState, useEffect } from 'react';

/* http services */
import { loadAllFarmersProfile } from 'utils/services';

/* Styles */
import './FindFarmer.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import FarmersList from './FarmersList.component';

const FindYourFarmer = () => {
  const [farmers, setFarmers] = useState<any[] | null>(null);

  /* Load all the farmers */
  useEffect(() => {
    loadAllFarmersProfile().then(({ data }: any) => {
      setFarmers(data.farmers);
    });
  }, []);

  return (
    <section className="find-farmer">
      <h2 className="find-farmer__header">MEET OUR VENDORS</h2>
      {farmers ? <FarmersList farmers={farmers} /> : <Spinner />}
    </section>
  );
};

export default FindYourFarmer;
