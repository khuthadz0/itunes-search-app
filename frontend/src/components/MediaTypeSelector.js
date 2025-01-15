import React from 'react';

export const MediaTypeSelector = ({ selectedMediaType, setSelectedMediaType }) => {
  const mediaTypes = [
    { value: 'all', label: 'All' },
    { value: 'movie', label: 'Movies' },
    { value: 'podcast', label: 'Podcasts' },
    { value: 'music', label: 'Music' },
    { value: 'musicVideo', label: 'Music Videos' },
    { value: 'audiobook', label: 'Audiobooks' },
    { value: 'shortFilm', label: 'Short Films' },
    { value: 'tvShow', label: 'TV Shows' },
    { value: 'software', label: 'Software' },
    { value: 'ebook', label: 'eBooks' }
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Media Type
      </label>
      <select
        value={selectedMediaType}
        onChange={(e) => setSelectedMediaType(e.target.value)}
        className="input-field"
      >
        {mediaTypes.map(type => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};