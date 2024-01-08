const DisplayRecipes = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <h2>{recipe.fields.title}</h2>
          <p>{recipe.fields.description}</p>
          <img src={recipe.fields.images[0].fields.file.url} alt="" />
        </div>
      ))}
    </>
  );
};

export default DisplayRecipes;