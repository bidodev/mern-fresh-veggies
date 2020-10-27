import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './asidebar.styles.scss';

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
        <ListItem {...item} />
      ))}
      <NavLink
        activeClassName="admin-panel__sidebar-item--active"
        className="admin-panel__sidebar-item"
        target="_blank"
        to={`/shop/${_id}`}
      >
        <Icon icon={['fas', 'external-link-alt']} className="admin-panel__sidebar-item__icon" />
        <p>Profile</p>
      </NavLink>
    </aside>
  );
};

export default AsideBar;
