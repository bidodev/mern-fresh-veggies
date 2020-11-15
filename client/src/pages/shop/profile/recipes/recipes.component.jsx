import React from 'react';
import recipesData from 'dev-data/recipes.json';

/* Styles */
import './recipes.styles.scss';

const Recipes = () => {
  const recipes = recipesData.map((recipe) => {
    const { _id, recipeName, coverImage, portion, ingredients, preparation } = recipe;

    return (
      <ul className="recipes__list" key={_id}>
        <li className="recipes__list__card">
          <h2 className="recipes__list__card__name">{recipeName}</h2>
          <div className="recipes__list__card__img-container">
            <img className="recipes__list__card__img-container--img" src={coverImage} alt="recipe-image" />
          </div>
          <span className="recipes__list__card__portion">Portion: {portion}</span>
          <div className="recipes__list__card__ingredients">
            Ingredients:
            {ingredients.map((item) => {
              return (
                <ul className="recipes__list__card__ingredients__list">
                  <li>
                    <span>{item.name}: </span>
                    <span>{item.quantity}</span>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="recipes__list__card__preparation">Preparation: {preparation}</div>
        </li>
      </ul>
    );
  });

  return (
    <section className="recipes-section">
      <div className="recipes-section__main-container">{recipes}</div>
    </section>
  );
};

export default Recipes;
