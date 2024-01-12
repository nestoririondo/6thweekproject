import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useContentful from "../useContentful";

const Recent = () => {
  const navigate = useNavigate();
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await getRecipes(0, 6); // skip 0, get 6 recipes
    try {
      setRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleViewAll = () => {
    navigate("/all");
  };
  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <div className="recent">
        <div className="left">
          <p>Latest recipes</p>
          <button className="view-all" onClick={handleViewAll}>
            View all
          </button>
        </div>
        <div className="right">
          {recipes && recipes.map((recipe) => (
            <div onClick={() => handleCardClick(recipe.sys.id)}
              key={recipe.sys.id}
              className="recipe-card"
            >
              <img src={recipe.fields.images[0].fields.file.url} alt="" />
              <p>{recipe.fields.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recent;
