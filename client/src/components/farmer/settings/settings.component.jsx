import React from 'react';
import { Route, NavLink } from 'react-router-dom';

/* Styles */
import './settings.component.styles.scss';

/* Compouse */
import PublicProfileSettings from './public.profile/profile.settings.component';

const AccountSetting = () => {
  return <div>Main Painel</div>;
};

const AdvancedSettings = () => {
  return <div>Advanced Settings</div>;
};

const UserSettings = ({ match, user }) => {

  return (
    <div className="admin__settings">
      <div className="admin__settings__nav">
        <ul>
          <h2>Settings</h2>
          <li>
            <NavLink
              className="admin__settings__nav-item"
              exact
              to="/farmer/admin/settings"
              activeClassName="admin__settings__nav--active"
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              className="admin__settings__nav-item"
              to="/farmer/admin/settings/public"
              activeClassName="admin__settings__nav--active"
            >
              Public Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className="admin__settings__nav-item"
              to="/farmer/admin/settings/advanced"
              activeClassName="admin__settings__nav--active"
            >
              Advanced Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <>
        <Route exact path={`${match.path}`} render={() => <AccountSetting />} />
        <Route path={`${match.path}/public`} render={() => <PublicProfileSettings user={user}/>} />
        <Route path={`${match.path}/advanced`} render={() => <AdvancedSettings />} />
      </>
    </div>
  );
};

export default UserSettings;
