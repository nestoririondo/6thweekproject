const Recent = ({ recipes }) => {
  return (
    <>
    <div className="recent-outer">
      <div className="recent">
        <div className="left">
          <h2>Recent recipes</h2>
        </div>
        <div className="right">
          {recipes.map((recipe) => (
            <div key={recipe.sys.id} className="recipe-card">
              <img src={recipe.fields.images[0].fields.file.url} alt="" />
              <h2>{recipe.fields.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Recent;
