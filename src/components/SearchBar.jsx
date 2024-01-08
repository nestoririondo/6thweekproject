const SearchBar = ({ handleSubmit, searchInput, setSearchInput }) => {
  return (
    <div className="search-bar">
      <form onSubmit={(e) => handleSubmit(e, searchInput)}>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
