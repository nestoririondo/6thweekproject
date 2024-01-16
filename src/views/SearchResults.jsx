import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContentful } from './useContentful';


function SearchResults() {
  const { getRecipesByName } = useContentful();
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await getRecipesByName(name);
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    } 
  };
  
  useEffect(() => {
    fetchRecipes(name);
  }, []);


  return (
    <div>
      <h2>Search Results for {name}</h2>
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <h3>{recipe.fields.name}</h3>
          <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.name} />
          <p>{recipe.fields.description}</p>
        </div>
      ))}
    </div>
  );}

export default SearchResults;