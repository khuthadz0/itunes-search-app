import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Create the context
const FavoritesContext = createContext();

// Custom hook for using favorites
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

// Provider component
export const FavoritesProvider = ({ children }) => {
  // Initialize state with saved favorites from localStorage if available
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error('Error loading favorites:', error);
      return [];
    }
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites]);

  // Add an item to favorites
  const addFavorite = useCallback((item) => {
    setFavorites(prevFavorites => {
      // Check if item already exists
      const exists = prevFavorites.some(
        fav => (fav.trackId || fav.collectionId) === (item.trackId || item.collectionId)
      );
      
      if (exists) return prevFavorites;
      
      // Add new item to the beginning of the array
      return [item, ...prevFavorites];
    });
  }, []);

  // Remove an item from favorites
  const removeFavorite = useCallback((item) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(
        fav => (fav.trackId || fav.collectionId) !== (item.trackId || item.collectionId)
      )
    );
  }, []);

  // Check if an item is in favorites
  const isFavorite = useCallback((item) => {
    return favorites.some(
      fav => (fav.trackId || fav.collectionId) === (item.trackId || item.collectionId)
    );
  }, [favorites]);

  // Clear all favorites
  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  // Toggle favorite status
  const toggleFavorite = useCallback((item) => {
    if (isFavorite(item)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  }, [isFavorite, removeFavorite, addFavorite]);

  // Get total number of favorites
  const getFavoritesCount = useCallback(() => {
    return favorites.length;
  }, [favorites]);

  // Context value
  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites,
    toggleFavorite,
    getFavoritesCount
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Optional: Add error boundary
export class FavoritesErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('FavoritesContext error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-4 text-red-600">
          Something went wrong with favorites management.
        </div>
      );
    }

    return this.props.children;
  }
}