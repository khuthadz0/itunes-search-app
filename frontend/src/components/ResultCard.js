import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

export const ResultCard = ({ item }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  
  const isFavorite = favorites.some(fav => 
    (fav.trackId || fav.collectionId) === (item.trackId || item.collectionId)
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  return (
    <div className="card card-hover">
      <img
        src={item.artworkUrl100?.replace('100x100', '200x200') || '/placeholder.png'}
        alt={item.trackName || item.collectionName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">
          {item.trackName || item.collectionName || 'Untitled'}
        </h3>
        <p className="text-gray-600 mb-2 truncate">
          {item.artistName || 'Unknown Artist'}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {item.primaryGenreName || 'Unknown Genre'}
          </span>
          <button
            onClick={handleFavoriteClick}
            className={`p-2 transition-colors ${
              isFavorite ? 'text-red-500' : 'text-gray-400'
            } hover:text-red-600`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            ♥
          </button>
        </div>
        {item.trackPrice && (
          <div className="mt-2 text-sm text-gray-600">
            Price: ${item.trackPrice}
          </div>
        )}
      </div>
    </div>
  );
};