import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { FavoritesProvider, FavoritesErrorBoundary } from './contexts/FavoritesContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <FavoritesErrorBoundary>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </FavoritesErrorBoundary>
  </React.StrictMode>
);