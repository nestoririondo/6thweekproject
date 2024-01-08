const AllRecipes = ({ recipes, setView }) => {
  return (
    <>
      <div className="all-recipes">
        <div className="title">
          <button
            className="back"
            onClick={() => {
              setView("frontpage");
            }}
          >
            Back
          </button>
          <h2>All latest recipes</h2>
          <span></span>
        </div>
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <div key={recipe.sys.id} className="recipe-card">
              <img src={recipe.fields.images[0].fields.file.url} alt="" />
              <h3>{recipe.fields.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllRecipes;
