import React from 'react';
import './account.component.styles.scss';

import CustomButton from 'components/UI/custom-button/custom-button.component';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const AccountSetting = ({ user }) => {
  return (
    <div className="settings__page__item__wrapper">
      <div className="settings__page__item__wrapper__account">
        <h4>Account</h4>
        <p>Edit your account settings and change your password here.</p>
        <hr />

        <div className="settings__accounts__email">
          <h5>Email:</h5>

          <div className="settings__accounts__email__input">
            <input
              type="email"
              id="name"
              name="name"
              placeholder={`Your email address is ${user.data.email}`}
              required
            />
            <Icon icon={['far', 'edit']} />
          </div>
        </div>
        <hr />
        <h5>Password:</h5>

        <div className="settings__accounts__email">
          <input type="email" id="name" name="name" placeholder={`Enter Current Password`} required />
          <input type="email" id="name" name="name" placeholder={`Enter New Password`} required />
          <input type="email" id="name" name="name" placeholder={`Repeat New Password`} required />
        </div>

        <hr />
        <CustomButton type="submit" style={{ width: '15rem' }}>
          Save Password
        </CustomButton>
      </div>
    </div>
  );
};

export default AccountSetting;
