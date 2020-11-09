import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './asidebar.styles.scss';

import ListItem from './items/listitem.component';

const AsideBar = () => {
  const user = useSelector(({ login }) => login.user.data);
  
  const sideBarItens = [
    { id: 1, name: 'home', icon: ['fas', 'home'] },
    { id: 2, name: 'settings', icon: ['fas', 'users-cog'] },
    { id: 3, name: 'stock', icon: ['fas', 'store-alt'] },
    { id: 4, name: 'orders', icon: ['fas', 'truck'] },
  ];

  return (
    <aside className="admin-panel__sidebar">
      {/* <!-- aside items --> */}
      {sideBarItens.map((item) => (
        <ListItem key={item.id}{...item} />
      ))}
      <NavLink
        activeClassName="admin-panel__sidebar-item--active"
        className="admin-panel__sidebar-item"
        target="_blank"
        to={`/shop/${user._id}`}
      >
        <Icon icon={['fas', 'external-link-alt']} className="admin-panel__sidebar-item__icon" />
        <p>Profile</p>
      </NavLink>
    </aside>
  );
};

export default AsideBar;
