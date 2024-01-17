import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContentful from "../hooks/useContentful";
import SearchBar from "../components/SearchBar";
import "./SearchResults.css";

const { getRecipesByName } = useContentful();

const fetchRecipes = async (name, setRecipes) => {
  try {
    const response = await getRecipesByName(name);
    setRecipes(response);
  } catch (error) {
    console.error(error);
  }
};

function SearchResults() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes(name, setRecipes);
  }, [name]);

  return (
    <>
    <SearchBar />
      <h2>Search Results for {name}</h2>
      <div className="recipe-container">
        {recipes &&
          recipes.map((recipe) => (
            <div
              key={recipe.sys.id}
              className="recipe-card"
              onClick={() => handleCardClick(recipe.sys.id)}
            >
              <p className="cooking-time">
                {recipe.fields.cookingTime} minutes
              </p>

              <img
                src={recipe.fields.images[0].fields.file.url}
                alt={recipe.fields.title}
              />
              <p className="recipe-title">{recipe.fields.title}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchResults;
