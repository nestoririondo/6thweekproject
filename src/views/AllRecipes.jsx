import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import useContentful from "../useContentful";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [amountSkipRecipes, setAmountSkipRecipes] = useState(0);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getRecipes } = useContentful();
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    const response = await getRecipes(amountSkipRecipes, 3);
    try {
      setRecipes(prevRecipes => [...prevRecipes, ...response]);
      setSortedRecipes(prevRecipes => [...prevRecipes, ...response]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [amountSkipRecipes]);

  const loadMore = () => { 
    setAmountSkipRecipes(amountSkipRecipes + 3);
  };

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

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
            sortedRecipes.map((recipe) => (
              <div
                key={recipe.sys.id}
                className="recipe-card"
                onClick={() => handleCardClick(recipe.sys.id)}
              >
                <img src={recipe.fields.images[0].fields.file.url} alt={recipe.fields.title} />
                <p>{recipe.fields.title}</p>
              </div>
            ))}
        </div>
        <button
          className="load-more-btn"
          onClick={loadMore}
          // disabled={amountOfRecipes >= recipes.length}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default AllRecipes;
