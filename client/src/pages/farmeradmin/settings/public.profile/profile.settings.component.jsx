import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* Styles */
import './profile.settings.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';
//import Alerts from 'components/UI/alerts';

function PublicProfileSettings({ user }) {
  console.log(user);
  /* Load actual status of the configs */
  const [configs, setConfigs] = useState(null);
  //const [alert, setAlert] = useState(null);

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
        //setAlert(res.data.status);
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
          <h2 className="settings__page__item__wrapper--header">Public Profile</h2>
          <p className="settings__page__item__wrapper--sub">Welcome {user.name}</p>
          <h3 className="settings__page__item__wrapper__header">Select how your profile should appear in the store.</h3>
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
              <p>Configure if your store is closed or open</p>
            </div>
          </div>
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
              <p>Display recipes based on your available products</p>
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
              <p>Display photos on your public profile</p>
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
