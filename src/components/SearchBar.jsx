import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ searchInput }) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${inputValue}`);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="logo">
          <h1 onClick={() => navigate("/")}>Foodie Network</h1>
        </div>
        <div className="search-bar">
          <form onSubmit={(e) => handleSubmit(e, searchInput)}>
            <div className="form-group1">
              <label htmlFor="course">Course </label>
              <select name="course">
                <option value="all">All</option>
                <option value="appetizer">Starter</option>
                <option value="main course">Main Course</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="form-group2">
              <label htmlFor="recipes">Recipes </label>
              <input
                type="text"
                placeholder="Search by name, ingredient, diet..."
                value={searchInput}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;