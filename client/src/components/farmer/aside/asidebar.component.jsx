import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

/* Styles */
import './asidebar.component.styles.scss';

const AsideBar = () => {
  const history = useHistory();

  return (
    <aside className="main-page__sidebar">
      {/* <!-- aside items --> */}
      <div className="main-page__sidebar-item" onClick={() => history.push('/farmer/admin')}>
        <FontAwesomeIcon icon={['fas', 'home']} className="icon" />
        <br />
        Home
      </div>
      <div className="main-page__sidebar-item" onClick={() => history.push('/farmer/admin/stock')}>
        <FontAwesomeIcon icon={['fas', 'store-alt']} className="icon" />
        <br />
        Stock
      </div>
    </aside>
  );
};

export default AsideBar;
