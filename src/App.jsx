import React, { useState, useEffect } from "react";
import useContentful from "./useContentful";
import SearchBar from "./components/SearchBar";
import Recent from "./components/Recent";
import AllRecipes from "./components/AllRecipes";
import Diet from "./components/Diet";
import "./App.css";

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [view, setView] = useState("frontpage");

  useEffect(() => {
    getRecipes().then((recipes) => {
      setRecipes(recipes);
    });
    return () => {
      setRecipes([]);
    };
  }, [search]);

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
    setView("search");
  };

  return (
    <div className="container">
      <SearchBar
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setView={setView}
      />
      <div className="content">
        {(() => {
          switch (view) {
            case "frontpage":
              return (
                <>
                  <Recent recipes={recipes.slice(0, 6)} setView={setView} />
                  <Diet />
                </>
              );
            case "search":
              return <SearchResults recipes={recipes} search={search} />;
            case "all":
              return <AllRecipes recipes={recipes} setView={setView} />;
            case "recipe-detail":
              return <RecipeDetailView />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
