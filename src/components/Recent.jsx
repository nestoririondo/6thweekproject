const Recent = ({ recipes }) => {
  return (
    <>
      <div className="recent">
        <h2>Recent recipes</h2>
        {recipes.map((recipe) => (
          <div key={recipe.sys.id} className="recipe-card">
            <h2>{recipe.fields.title}</h2>
            <p>{recipe.fields.description}</p>
            <img src={recipe.fields.images[0].fields.file.url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Recent;
