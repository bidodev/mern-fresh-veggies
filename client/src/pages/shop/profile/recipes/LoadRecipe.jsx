import React from 'react';

const LoadRecipe = ({ recipe }) => {
  /* destructing what we need */
  const { coverImage, recipeName, portion, ingredients, preparation } = recipe;

  return (
    <section className="recipes">
      <div className="recipes__card">
        <div className="recipes__card__img-container">
          <img className="recipes__card__img-container--img" src={coverImage} alt="recipe" />
        </div>
        <div className="recipes__card__info-container">
          <h2 className="recipes__card__info-container__name">{recipeName}</h2>
          <span className="recipes__card__info-container__portion">Portion: {portion}</span>
          <h3>Ingredients</h3>
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
            <h3>Preparation</h3>
            {preparation}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadRecipe;
