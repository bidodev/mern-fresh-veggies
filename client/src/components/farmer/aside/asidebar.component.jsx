import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './asidebar.component.styles.scss';

import ListItem from './items/listitem.component';

const AsideBar = ({ _id }) => {

  const sideBarItens = [
    { name: 'home', icon: ['fas', 'home'] },
    { name: 'stock', icon: ['fas', 'store-alt'] },
    { name: 'orders', icon: ['fas', 'truck'] },
  ];

  return (
    <aside className="admin-panel__sidebar">
      {/* <!-- aside items --> */}
      {sideBarItens.map((item) => (
        <ListItem farmerId={_id} {...item} />
      ))}
      <Link className="admin-panel__sidebar-item" target="_blank" to={`/shop/${_id}`}>
        <Icon icon={['fas', 'external-link-alt']} className="admin-panel__sidebar-item__icon" />
        <p>Profile</p>
      </Link>
    </aside>
  );
};

export default AsideBar;
