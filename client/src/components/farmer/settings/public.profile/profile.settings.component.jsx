import React from 'react';
import './profile.settings.component.styles.scss';

function PublicProfileSettings() {
  return (
    <div className="settings__page__item__wrapper">
      <h4>Public Profile</h4>

      <div className="settings__page__item__header">
        <h2>Select how your profile should Lorem ipsum dolor sit amet.</h2>
        <p>Select this options to Lorem ipsum dolor sit amet.</p>
      </div>

      <hr />

      <div className="settings__page__item__wrapper__item--settings">
        <div className="toggle-switch" onChange={() => console.log('Hello')}>
          <input type="checkbox" id="chkTest" name="chkTest" />
          <label htmlFor="chkTest">
            <span className="toggle-track"></span>
          </label>
        </div>

        <div className="text">
          <p>Photos</p>
          <p>Display photos of your Farm on your public profile</p>
        </div>
      </div>

      {/* recipes */}
      <div className="settings__page__item__wrapper__item--settings">
        <div className="toggle-switch" onChange={() => console.log('Hello')}>
          <input type="checkbox" id="chkTest" name="chkTest" />
          <label htmlFor="chkTest">
            <span className="toggle-track"></span>
          </label>
        </div>

        <div className="text">
          <p>Recipes</p>
          <p>Display recipes suggestions based on your Profile</p>
        </div>
      </div>
    </div>
  );
}

export default PublicProfileSettings;
