import React from 'react';
import { Route, Link } from 'react-router-dom';

/* Styles */
import './settings.component.styles.scss';

const AccountSetting = () => {
  return <div>Main Painel</div>;
};

const PublicProfileSettings = () => {
  return <div>Public Painel</div>;
};

const AdvancedSettings = () => {
  return <div>Advanced Settings</div>;
};

const UserSettings = ({ match }) => {
  return (
    <div className="admin__settings">
      <div className="admin__settings_nav">
        <ul>
          <h2>Settings</h2>
          <li className="admin__settings_nav--active">
            <Link to="/farmer/admin/settings">Account</Link>
          </li>
          <li>
            <Link to="/farmer/admin/settings/public">Public Profile</Link>
          </li>
          <li>
            <Link to="/farmer/admin/settings/advanced">Advanced Settings</Link>
          </li>
        </ul>
      </div>
      <>
        <Route exact path={`${match.path}`} render={() => <AccountSetting />} />
        <Route path={`${match.path}/public`} render={() => <PublicProfileSettings />} />
        <Route path={`${match.path}/advanced`} render={() => <AdvancedSettings />} />
      </>
    </div>
  );
};

export default UserSettings;
