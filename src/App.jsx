import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";
import SearchBar from "./components/SearchBar";
import Recent from "./components/Recent";
import "./App.css";

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

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
    };
  }, [search]);

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div className="container">
      <SearchBar
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Recent recipes={recipes} loading={loading} />
      {/* <Course recipes={recipes} loading={loading} />
      <Diet recipes={recipes} loading={loading} /> */}
    </div>
  );
}

export default App;
