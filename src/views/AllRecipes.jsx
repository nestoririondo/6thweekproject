import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import useContentful from "../useContentful";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [amountOfRecipes, setAmountOfRecipes] = useState(6);
  const [sortedRecipes, setSortedRecipes] = useState([]);

  const { getRecipes } = useContentful();
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    const response = await getRecipes();
    try {
      setRecipes(response);
      setSortedRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const loadMore = () => {
    setAmountOfRecipes(amountOfRecipes + 6);
  };

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <SearchBar />
      <div className="all-recipes">
        <div className="title">
          <button className="back" onClick={handleBackClick}>
            Back
          </button>
          <p>All recipes</p>
          <span></span>
        </div>
        <Filter
          sortedRecipes={sortedRecipes}
          setSortedRecipes={setSortedRecipes}
        />
        <div className="recipe-container">
          {sortedRecipes &&
            sortedRecipes.slice(0, amountOfRecipes).map((recipe) => (
              <div
                key={recipe.sys.id}
                className="recipe-card"
                onClick={() => handleCardClick(recipe.sys.id)}
              >
                <img src={recipe.fields.images[0].fields.file.url} alt="" />
                <p>{recipe.fields.title}</p>
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
