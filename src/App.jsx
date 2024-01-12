import { Routes, Route } from "react-router-dom";
import AllRecipes from "./views/AllRecipes";
import RecipeDetail from "./views/RecipeDetail";
import SearchBar from "./components/SearchBar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/all" element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
