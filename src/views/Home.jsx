import React from "react";
import Recent from "../components/Recent";
import Diet from "../components/Diet";
import SearchBar from "../components/SearchBar";

const Home = ({ recipes, setSelectedRecipe }) => {
  return (
    <>
      <SearchBar />
      <Recent
        recipes={recipes.slice(0, 6)}
        setSelectedRecipe={setSelectedRecipe}
      />
      <Diet />
    </>
  );
};

export default Home;
