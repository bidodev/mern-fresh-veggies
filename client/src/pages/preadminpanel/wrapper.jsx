import React from 'react';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Story from 'pages/preadminpanel/story/Story';
import Footer from 'components/footer/Footer'
import Authentication from 'components/authentication/wrapper'

/* Styles */
import './wrapper.styles.scss';

const PreAdminPanel = ({ match }) => {
  return (
    <>
      <ShopNavBar match={match} />
      <Authentication match={match}/>
      <Story />
      <Footer />
    </>
  );
};
export default PreAdminPanel;
