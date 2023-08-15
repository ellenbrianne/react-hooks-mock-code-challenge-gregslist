import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { image, description, id, location } = listing;

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  const handleTrash = () => {
    handleDelete(id);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleTrash} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
