import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useContentful from "./useContentful";
import SearchBar from "./components/SearchBar";
import AllRecipes from "./views/AllRecipes";
import RecipeDetail from "./views/RecipeDetail";
import Home from "./views/Home";
import "./App.css";

const goUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipes(recipes);
      })
      .catch((error) => console.error(error));
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
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
            }
          />
          {/* <Route
              path="/search"
              element={<SearchResults recipes={recipes} search={search} />}
            /> */}
          <Route
            path="/all"
            element={
              <AllRecipes
                recipes={recipes}
                setSelectedRecipe={setSelectedRecipe}
                setRecipes={setRecipes}
              />
            }
          />
          <Route
            path="/recipe/:slug"
            element={<RecipeDetail selectedRecipe={selectedRecipe} />}
          />
        </Routes>
      </div>
      <footer>
        <button onClick={goUp} className="go-up-btn">
          Go Up!
        </button>
      </footer>
    </div>
  );
}
export default App;
