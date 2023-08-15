import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load Up All Listings
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(listings => setListings(listings))
  }, []);

  // Delete A Single Listing w/Trash Button
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    const filteredListings = listings.filter(listing => {
      return listing.id !== id;
    });
    setListings(filteredListings);
  };

  const searchedListings = listings.filter(listing => listing.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ListingsContainer 
        searchedListings={searchedListings} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}

export default App;
