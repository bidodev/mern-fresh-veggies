import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Styles */
import './asidebar.styles.scss';

/* Component Imports */
import ListItem from './items/listitem.component';

const AsideBar = () => {
  const user = useSelector(({ login }) => login.user.data);

  const sideBarItems = [
    { id: 1, name: 'home', icon: ['fas', 'home'] },
    { id: 2, name: 'settings', icon: ['fas', 'users-cog'] },
    { id: 3, name: 'stock', icon: ['fas', 'store-alt'] },
    { id: 4, name: 'orders', icon: ['fas', 'truck'] },
  ];

  return (
    <aside className="admin-panel__sidebar">
      {/* <!-- aside items --> */}
      {sideBarItems.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
      <NavLink
        activeClassName="admin-panel__sidebar-item--active"
        className="admin-panel__sidebar-item"
        target="_blank"
        to={`/shop/farmer/${user.slug}`}
      >
        <Icon icon={['fas', 'external-link-alt']} />
        <p>Profile</p>
      </NavLink>
    </aside>
  );
};

export default AsideBar;
