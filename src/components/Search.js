import React from "react";

function Search({ searchQuery, setSearchQuery }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
