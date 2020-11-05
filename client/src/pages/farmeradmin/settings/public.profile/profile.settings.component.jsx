import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* Styles */
import './profile.settings.component.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
import Alerts from 'components/UI/alerts';

function PublicProfileSettings({ user }) {
  /* Load actual status of the configs */
  const [configs, setConfigs] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    axios
      .get('/users/settings')
      .then(({ data }) => {
        setConfigs(data.data.config);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  /* Update the configs on every toggle */
  useEffect(() => {
    axios
      .patch('/users/settings', configs)
      .then((res) => {
        setAlert(res.data.status);
      })
      .catch((err) => console.log(err.response.data.message));
  }, [configs]);

  return (
    <>
      {configs ? (
        <div className="settings__page__item__wrapper">
          {/* {alert ? (
            <div className="messages error">
              <h2 className="element-invisible">Statusbericht</h2>
              <h3>{alert}</h3>
            </div>
          ) : (
            ''
          )} */}

          <h4>Public Profile</h4>
          <p>Hello {user.data.name}</p>

          <div className="settings__page__item__header">
            <h2>Select how your profile should Lorem ipsum dolor sit amet.</h2>
            <p>Select this options to Lorem ipsum dolor sit amet.</p>
          </div>

          {/* headline */}
          <hr />
          <h3>Store Configuration</h3>

          <div className="settings__page__item__wrapper__item--settings">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="store"
                name="store"
                checked={configs.open}
                onChange={() => setConfigs({ ...configs, open: !configs.open })}
              />
              <label htmlFor="store">
                <span className="toggle-track"></span>
              </label>
            </div>

            <div className="text">
              <p>Status</p>
              <p>You can configure if your store is in the moment closed or open</p>
            </div>
          </div>

          {/* headline */}
          <hr />
          <h3>Sections Configuration</h3>

          {/* recipes */}
          <div className="settings__page__item__wrapper__item--settings">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="recipes"
                name="recipes"
                checked={configs.recipes}
                onChange={() => setConfigs({ ...configs, recipes: !configs.recipes })}
              />
              <label htmlFor="recipes">
                <span className="toggle-track"></span>
              </label>
            </div>

            <div className="text">
              <p>Recipes</p>
              <p>Display recipes suggestions based on your Profile</p>
            </div>
          </div>

          {/* products */}
          <div className="settings__page__item__wrapper__item--settings">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="products"
                name="products"
                checked={configs.products}
                onChange={() => setConfigs({ ...configs, products: !configs.products })}
              />
              <label htmlFor="products">
                <span className="toggle-track"></span>
              </label>
            </div>

            <div className="text">
              <p>Products</p>
              <p>Display products in your store</p>
            </div>
          </div>

          {/* Photos */}
          <div className="settings__page__item__wrapper__item--settings">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="photos"
                name="photos"
                checked={configs.gallery}
                onChange={() => setConfigs({ ...configs, gallery: !configs.gallery })}
              />
              <label htmlFor="photos">
                <span className="toggle-track"></span>
              </label>
            </div>

            <div className="text">
              <p>Photos</p>
              <p>Display photos of your Farm on your public profile</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="settings__page__item__wrapper">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default PublicProfileSettings;
