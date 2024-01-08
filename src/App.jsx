import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";
import DisplayRecipes from "./components/DisplayRecipes";
import SearchBar from "./components/SearchBar";

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRecipes().then((recipes) => {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.fields.title.toLowerCase().includes(search.toLowerCase())
      );
      setRecipes(filteredRecipes);
    });
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
    </>
  );
}

export default App;
