import { Routes, Route } from "react-router-dom";
import AllRecipes from "./views/AllRecipes";
import RecipeDetail from "./views/RecipeDetail";
import Home from "./views/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <div className="container">
      <div className="content">
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/all" element={<AllRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
