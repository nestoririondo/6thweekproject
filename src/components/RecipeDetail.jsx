const RecipeDetail = ({ recipes }, id) => {
  const thisRecipe = recipes.find((recipe) => recipe.sys.id === id);
  return <>{thisRecipe.fields.title}</>;
};

export default RecipeDetail;
