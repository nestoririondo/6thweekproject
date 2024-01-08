import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <h2>{recipe.fields.title}</h2>
          <p>{recipe.fields.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
