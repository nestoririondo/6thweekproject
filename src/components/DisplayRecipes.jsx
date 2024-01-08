const DisplayRecipes = ({ recipes }) => {
  return (
    <>
      <div className="recipe-container">
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

export default DisplayRecipes;
