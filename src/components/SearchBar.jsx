const SearchBar = ({handleSubmit, searchInput, setSearchInput}) => {
    return ( 
        <form onSubmit={(e) => handleSubmit(e, searchInput)}>
            <input 
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
     );
}
 
export default SearchBar;{}