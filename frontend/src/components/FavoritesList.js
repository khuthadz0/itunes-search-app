import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

export const FavoritesList = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (!favorites.length) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Favorites</h2>
        <p className="text-gray-500 text-center">No favorites added yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Favorites</h2>
        <span className="text-sm text-gray-500">
          {favorites.length} {favorites.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="space-y-4">
        {favorites.map(item => (
          <div
            key={item.trackId || item.collectionId}
            className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg"
          >
            <img
              src={item.artworkUrl100}
              alt={item.trackName || item.collectionName}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium truncate">
                {item.trackName || item.collectionName}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {item.artistName}
              </p>
            </div>
            <button
              onClick={() => removeFavorite(item)}
              className="p-2 text-gray-400 hover:text-red-500"
              title="Remove from favorites"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};