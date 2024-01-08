const SearchBar = ({ handleSubmit, searchInput, setSearchInput }) => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="logo">
          <h1>Foodie Network</h1>
        </div>
        <div className="search-bar">
          <form onSubmit={(e) => handleSubmit(e, searchInput)}>
            <div className="form-group1">
              <label htmlFor="course">Course </label>
              <select name="course">
                <option value="appetizer">Appetizer</option>
                <option value="main course">Main Course</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="form-group2">
              <label htmlFor="recipes">Recipes </label>
              <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
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
