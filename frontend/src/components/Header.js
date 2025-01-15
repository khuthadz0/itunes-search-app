import React from 'react';

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              iTunes Search
            </h1>
            <p className="text-sm text-gray-600">
              Search for your favorite music, movies, apps, and more
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Powered by iTunes API
          </div>
        </div>
      </div>
    </header>
  );
};