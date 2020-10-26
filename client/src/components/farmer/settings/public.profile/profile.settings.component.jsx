import React, { useState, useEffect } from 'react';
import './profile.settings.component.styles.scss';
import axios from 'axios';

function PublicProfileSettings({ user }) {
  const { open, gallery, products, recipes } = user.data.config;
  
  const [storeStatus, setStoreStatus] = useState(open);
  const [storePhotos, setStorePhotos] = useState(gallery);
  const [storeRecipes, setStoreRecipes] = useState(products);
  const [storeProducts, setStoreProducts] = useState(recipes);

  useEffect(() => {
    const data = {
      open: storeStatus,
      gallery: storePhotos,
      recipes: storeRecipes,
      products: storeProducts,
    };

    axios
      .patch('/users/settings', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }, [storeStatus, storePhotos, storeRecipes, storeProducts]);

  return (
    <div className="settings__page__item__wrapper">
      <h4>Public Profile</h4>
      <p>Hello {user.data.name}</p>

      <div className="settings__page__item__header">
        <h2>Select how your profile should Lorem ipsum dolor sit amet.</h2>
        <p>Select this options to Lorem ipsum dolor sit amet.</p>
      </div>

      <hr />
      <h3>Store Configuration</h3>
      <div className="settings__page__item__wrapper__item--settings">
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="store"
            name="store"
            checked={storeStatus}
            onChange={() => setStoreStatus(!storeStatus)}
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

      <hr />
      <h3>Sections Configuration</h3>

      <div className="settings__page__item__wrapper__item--settings">
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="photos"
            name="photos"
            checked={storePhotos}
            onChange={() => setStorePhotos(!storePhotos)}
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

      {/* recipes */}
      <div className="settings__page__item__wrapper__item--settings">
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="recipes"
            name="recipes"
            checked={storeRecipes}
            onChange={() => setStoreRecipes(!storeRecipes)}
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
            checked={storeProducts}
            onChange={() => setStoreProducts(!storeProducts)}
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
    </div>
  );
}

export default PublicProfileSettings;
