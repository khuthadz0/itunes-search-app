import React from 'react';
import { ResultCard } from './ResultCard';

export const SearchResults = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading results...</p>
      </div>
    );
  }

  if (!results?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          No results found. Try searching for something!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map(item => (
        <ResultCard 
          key={item.trackId || item.collectionId} 
          item={item} 
        />
      ))}
    </div>
  );
};