import React from 'react';

/* Component Imports */
import ShopNavBar from 'components/navbar/ShopNavBar';
import Story from 'pages/preadminpanel/story/Story';
import Footer from 'components/footer/Footer'

/* Styles */
import './wrapper.styles.scss';

const PreAdminPanel = ({ match }) => {
  console.log("PreAdminPanel rendered")
  return (
    <>
      <ShopNavBar match={match}/>
      <Story />
      <Footer />
    </>
  );
};
export default PreAdminPanel;
