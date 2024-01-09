import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AllRecipes = ({ recipes, setSelectedRecipe }) => {
  const [amountOfRecipes, setAmountOfRecipes] = useState(6);

  const loadMore = () => {
    setAmountOfRecipes(amountOfRecipes + 6);
  };

  const navigate = useNavigate();

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    navigate(`/recipe/${recipe.fields.slug}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="all-recipes">
        <div className="title">
          <button className="back" onClick={handleBackClick}>
            Back
          </button>
          <h2>All latest recipes</h2>
          <span></span>
        </div>
        <div className="recipe-container">
          {recipes.slice(0, amountOfRecipes).map((recipe) => (
            <div
              key={recipe.sys.id}
              className="recipe-card"
              onClick={() => handleCardClick(recipe)}
            >
              <img src={recipe.fields.images[0].fields.file.url} alt="" />
              <h3>{recipe.fields.title}</h3>
            </div>
          ))}
        </div>
        <button
          className="load-more-btn"
          onClick={loadMore}
          disabled={amountOfRecipes >= recipes.length}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default AllRecipes;
