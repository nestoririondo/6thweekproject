import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Filter from "../components/Filter";

const AllRecipes = ({ recipes, setSelectedRecipe }) => {
  const [amountOfRecipes, setAmountOfRecipes] = useState(6);
  const [sortedRecipes, setSortedRecipes] = useState(recipes);

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
          <p>All latest recipes</p>
          <span></span>
        </div>
        <Filter
          sortedRecipes={sortedRecipes}
          setSortedRecipes={setSortedRecipes}
        />
        <div className="recipe-container">
          {sortedRecipes.slice(0, amountOfRecipes).map((recipe) => (
            <div
              key={recipe.sys.id}
              className="recipe-card"
              onClick={() => handleCardClick(recipe)}
            >
              <img src={recipe.fields.images[0].fields.file.url} alt="" />
              <p>{recipe.fields.title}</p>
            </div>
          ))}
        </div>
        <button
          className="load-more-btn"
          onClick={loadMore}
          disabled={amountOfRecipes >= sortedRecipes.length}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default AllRecipes;
