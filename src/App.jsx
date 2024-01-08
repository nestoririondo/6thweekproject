import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";
import DisplayRecipes from "./components/DisplayRecipes";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRecipes().then((recipes) => {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.fields.title.toLowerCase().includes(search.toLowerCase())
      );
      setRecipes(filteredRecipes);
      setLoading(false);
    });
    return () => {
      setRecipes([]);
    }
  }, [search]);

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {recipes && <DisplayRecipes recipes={recipes} />}
      {loading && <p>Loading...</p>}
      {!loading && recipes.length === 0 && <p>No recipes found</p>}
    </>
  );
}

export default App;
