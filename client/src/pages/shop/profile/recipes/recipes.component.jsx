import React from 'react';
import recipesData from 'dev-data/recipes.json';

/* Styles */
import './recipes.styles.scss';

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

const Recipes = ({ farmer }) => {
  const { products } = farmer;

  /* Return an array with the products names */
  const farmerProductsList = products.map(({ name }) => name.toLowerCase());

  const resultRecipes = recipesData.filter((recipe) => {
    let countIngredients = 0;

    const hasSome = recipe.ingredients.some((ingredient) =>
      farmerProductsList.includes(ingredient.name) ? countIngredients++ : countIngredients
    );
    if (hasSome) {
      if (countIngredients >= 2) {
        /* if the recipe has more than 2 ingrediets that match with farm products, he will be displayed */
        return recipe;
      }
    }
  });

  return (
    <section className="recipes-section">
      <h2>Recipes' Suggestions</h2>
      <p>Based on {farmer.name}'s products we found {resultRecipes.length} recipes suggestions for you! {resultRecipes.length > 0 ? '😋' : '😢'}</p>
      <div className="recipes-section__main-container">
        {resultRecipes.map((recipe, index) => (
          <LoadRecipe key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
