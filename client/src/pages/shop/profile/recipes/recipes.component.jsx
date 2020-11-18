import React from 'react';
import recipesData from 'dev-data/recipes.json';

/* Styles */
import './recipes.styles.scss';

const Recipes = () => {
  const recipes = recipesData.map((recipe) => {
    const { _id, recipeName, coverImage, portion, ingredients, preparation } = recipe;

    return (
      <section className="recipes">
        <div className="recipes__card" key={_id}>
          <div className="recipes__card__img-container">
            <img className="recipes__card__img-container--img" src={coverImage} alt="recipe-image" />
          </div>
          <div className="recipes__card__info-container">
            <h2 className="recipes__card__info-container__name">{recipeName}</h2>
            <span className="recipes__card__info-container__portion">Portion: {portion}</span>
            <h3>Ingredients</h3>
            <div className="recipes__card__info-container__ingredients">
              {ingredients.map((item) => {
                return (
                  <div className="recipes__card__info-container__ingredients__list">
                    {item.name}: {item.quantity}
                  </div>
                );
              })}
            </div>
            <div className="recipes__card__info-container__preparation">
              <h3>Preparation</h3>
              {preparation}
            </div>
          </div>
        </div>
      </section>
    );
  });

  return (
    <section className="recipes-section">
      <h2>Recipes' Suggestions</h2>
      <div className="recipes-section__main-container">{recipes}</div>
    </section>
  );
};

export default Recipes;
