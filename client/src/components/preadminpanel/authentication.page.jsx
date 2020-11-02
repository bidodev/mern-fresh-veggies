import React from 'react';

/* Component Imports */
import Story from 'components/preadminpanel/story/story.component';
import ShopNavBar from 'components/navbar/ShopNavBar';

/* Styles */
import './authentication.styles.scss';

const PreAdminPainel = ({ match }) => {
  return (
    <>
      <ShopNavBar match={match}>
        <div>Hello</div>
      </ShopNavBar>
      <div className="farmer__authentication">
        <Story />
      </div>
    </>
  );
};
export default PreAdminPainel;
