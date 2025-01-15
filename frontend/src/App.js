import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { MediaTypeSelector } from './components/MediaTypeSelector';
import { SearchResults } from './components/SearchResults';
import { FavoritesList } from './components/FavoritesList';
import { Footer } from './components/Footer';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMediaType, setSelectedMediaType] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <SearchBar 
                setSearchResults={setSearchResults}
                setIsLoading={setIsLoading}
                setError={setError}
                mediaType={selectedMediaType}
              />
              <MediaTypeSelector
                selectedMediaType={selectedMediaType}
                setSelectedMediaType={setSelectedMediaType}
              />
              {error && (
                <div className="text-red-500 mt-4">{error}</div>
              )}
              <SearchResults 
                results={searchResults}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <FavoritesList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;