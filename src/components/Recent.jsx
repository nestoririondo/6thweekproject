import { useNavigate } from "react-router-dom";

const Recent = ({ recipes, setSelectedRecipe }) => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/all");
  };
  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    navigate(`/recipe/${recipe.fields.slug}`);
  };

  return (
    <>
      <div className="recent">
        <div className="left">
          <h2>Latest recipes</h2>
          <button className="view-all" onClick={handleViewAll}>
            View all
          </button>
        </div>
        <div className="right">
          {recipes.map((recipe) => (
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
      </div>
    </>
  );
};

export default Recent;
