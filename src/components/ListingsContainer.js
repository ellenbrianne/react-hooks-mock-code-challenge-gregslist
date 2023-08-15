import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchedListings, handleDelete }) {

  const eachListing = searchedListings.map(listing => {
    return <ListingCard 
            key={listing.id} 
            listing={listing} 
            handleDelete={handleDelete}
          />
  });

  return (
    <main>
      <ul className="cards">
        {eachListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
