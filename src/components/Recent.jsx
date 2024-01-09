const Recent = ({ recipes, setView }) => {
  const handleViewAll = () => {
    setView("all");
  };
  const handleCardClick = (key) => {
    setView("recipe-detail");
  }

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
            <div key={recipe.sys.id} className="recipe-card" onClick={()=>handleCardClick(recipe.sys.id)}>
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
