import React, { useState } from 'react';
import { searchItems } from '../services/api';

export const SearchBar = ({ setSearchResults, setIsLoading, setError, mediaType }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      setIsLoading(true);
      setError(null);
      const data = await searchItems(searchTerm, mediaType);
      setSearchResults(data.results);
    } catch (error) {
      setError('Failed to fetch results. Please try again.');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for music, movies, apps..."
          className="input-field flex-1"
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={!searchTerm.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
};