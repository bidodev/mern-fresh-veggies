import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const ListItem = ({ name, icon }) => {
  let url = name === 'home' ? '/farmer/admin' : `/farmer/admin/${name.toLowerCase()}`;

  return (
    <NavLink
      activeClassName="admin-panel__sidebar-item--active"
      className="admin-panel__sidebar-item"
      exact
      to={`${url}`}
    >
      <Icon icon={icon} className="admin-panel__sidebar-item__icon" />
      <p>{name}</p>
    </NavLink>
  );
};

export default ListItem;
