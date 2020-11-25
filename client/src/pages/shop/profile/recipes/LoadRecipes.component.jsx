import React from 'react';

/* Styles */
import './LoadRecipes.styles.scss';

const LoadRecipe = ({ recipe }) => {
  const { coverImage, recipeName, ingredients, preparation } = recipe;

  return (
    <section className="recipes">
      <div className="recipes__card">
        <div className="recipes__card__img-container">
          <img className="recipes__card__img-container--img" src={coverImage} alt="recipe" />
        </div>
        <div className="recipes__card__info-container">
          <h2 className="recipes__card__info-container__name">{recipeName}</h2>
          <h3 className="recipes__card__info-container__ingredients-header">Ingredients</h3>
          <div className="recipes__card__info-container__ingredients">
            {ingredients.map((item, index) => {
              return (
                <div key={index} className="recipes__card__info-container__ingredients__list">
                  {item.name}: {item.quantity}
                </div>
              );
            })}
          </div>
          <div className="recipes__card__info-container__preparation">
            <h3 className="recipes__card__info-container__preparation--header">Preparation</h3>
            {preparation}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadRecipe;
