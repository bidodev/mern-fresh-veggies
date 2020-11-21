import React, { useState } from 'react';
import recipesData from 'dev-data/recipes.json';

import InfiniteScroll from 'react-infinite-scroll-component';/* Fontawesome Import */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';


/* Styles */
import './recipes.styles.scss';
import LoadRecipe from './LoadRecipe';


const Recipes = ({ farmer }) => {
  const { products } = farmer;
  const farmerHasAtleastProducts = 2;

  /* Return an array with the products names */
  const farmerProductsList = products.map(({ name }) => name.toLowerCase());
  const resultRecipes = recipesData.filter((recipe) => {
    let countIngredients = 0;

    recipe.ingredients.forEach((ingredient) =>
      farmerProductsList.includes(ingredient.name) ? countIngredients++ : countIngredients
    );
    /* if the recipe has more than 2 ingrediets that match with farm products, he will be displayed */
    return countIngredients >= farmerHasAtleastProducts ? recipe : null;
  });


  /* Scroll on demand */
  const [hasMore, setHasMore] = useState(true);
  const [recipesToShow, setRecipesToShow] = useState([]);

  const fetchMoreData = () => {
    if (recipesToShow.length >= resultRecipes.length) {
      return setHasMore(false);
    }

    setTimeout(() => {
      const newItems = resultRecipes.slice(recipesToShow.length, recipesToShow.length + 2);
      setRecipesToShow(recipesToShow.concat(newItems));
    }, 1500);
  };

  const Loader = () => {
    return (
      <div className="recipes-section__main-container__loader">
          <Icon icon="spinner" className="icon" spin />
      </div>
    )
  }

  return (
    <section className="recipes-section">
      <h2>Recipes' Suggestions</h2>
      <p>
        {resultRecipes.length > 0 ? `Based on ${farmer.name}'s products we found ${resultRecipes.length} recipes suggestions for you 😋` : 'Unfortunately, we did not find any recipe suggestions for you 😢'}
      </p>
      <div className="recipes-section__main-container">
        <InfiniteScroll
          dataLength={recipesToShow.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loader />}
        >
          {recipesToShow.map((recipe, index) => (
            <LoadRecipe key={index} recipe={recipe} />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Recipes;
