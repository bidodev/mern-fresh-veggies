import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const ListItem = ({ name, icon}) => {
    const history = useHistory();

    let url = name === 'home' ? '/farmer/admin' : `/farmer/admin/${name.toLowerCase()}`

    return (
    <div className="admin-panel__sidebar-item" onClick={() => history.push(`${url}`)}>
      <Icon icon={icon} className="admin-panel__sidebar-item__icon" />
      <p>{name}</p>
    </div>
  );
};

export default ListItem;
