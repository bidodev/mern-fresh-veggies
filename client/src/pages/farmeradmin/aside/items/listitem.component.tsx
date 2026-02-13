import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const ListItem = ({ name, icon }) => {
  let url = name === 'home' ? '/farmer/admin' : `/farmer/admin/${name.toLowerCase()}`;

  return (
    <NavLink
      className={({ isActive }) =>
        `admin-panel__sidebar-item${isActive ? ' admin-panel__sidebar-item--active' : ''}`
      }
      end={name === 'home'}
      to={`${url}`}
    >
      <Icon icon={icon} className="admin-panel__sidebar-item__icon" />
      <p>{name}</p>
    </NavLink>
  );
};

export default ListItem;
