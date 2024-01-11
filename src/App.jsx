import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useContentful from "./useContentful";
import SearchBar from "./components/SearchBar";
import Recent from "./components/Recent";
import AllRecipes from "./components/AllRecipes";
import Diet from "./components/Diet";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";

const goUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  const { getRecipes } = useContentful();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");

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
  };

  return (
    <Router>
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
                <>
                  <Recent
                    recipes={recipes.slice(0, 6)}
                    setSelectedRecipe={setSelectedRecipe}
                  />
                  <Diet />
                </>
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
              element={
                <RecipeDetail
                  selectedRecipe={selectedRecipe}
                />
              }
            />
          </Routes>
        </div>
        <footer>
          <button onClick={goUp} className="go-up-btn">Go Up!</button>
        </footer>
      </div>
    </Router>
  );
}
export default App;
