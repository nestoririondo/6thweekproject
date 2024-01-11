import React from "react";
import Recent from "../components/Recent";
import Diet from "../components/Diet";

const Home = ({recipes, setSelectedRecipe}) => {
  return (
    <>
      <Recent
        recipes={recipes.slice(0, 6)}
        setSelectedRecipe={setSelectedRecipe}
      />
      <Diet />
    </>
  );
};

export default Home;
