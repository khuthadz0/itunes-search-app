import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add JWT token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('jwt_token');
      // Try to get a new token
      try {
        await getAuthToken();
        // Retry the original request
        return api(error.config);
      } catch (retryError) {
        return Promise.reject(retryError);
      }
    }
    return Promise.reject(error);
  }
);

// Get authentication token
export const getAuthToken = async () => {
  try {
    const response = await api.post('/auth/token');
    const { token } = response.data;
    localStorage.setItem('jwt_token', token);
    return token;
  } catch (error) {
    console.error('Error getting auth token:', error);
    throw error;
  }
};

// Search iTunes content
export const searchItems = async (term, mediaType = 'all', limit = 50) => {
  try {
    // Ensure we have a valid token
    if (!localStorage.getItem('jwt_token')) {
      await getAuthToken();
    }

    const response = await api.post('/search', {
      term,
      media: mediaType,
      limit
    });

    return response.data;
  } catch (error) {
    console.error('Error searching items:', error);
    throw error;
  }
};

// Media type constants
export const MEDIA_TYPES = {
  ALL: 'all',
  MOVIE: 'movie',
  PODCAST: 'podcast',
  MUSIC: 'music',
  MUSIC_VIDEO: 'musicVideo',
  AUDIOBOOK: 'audiobook',
  SHORT_FILM: 'shortFilm',
  TV_SHOW: 'tvShow',
  SOFTWARE: 'software',
  EBOOK: 'ebook'
};

// Rate limiting helper
let requestQueue = [];
const rateLimit = async (callback) => {
  const now = Date.now();
  const timeWindow = 1000; // 1 second
  const maxRequests = 20; // Maximum requests per second

  // Remove old requests from queue
  requestQueue = requestQueue.filter(time => now - time < timeWindow);

  if (requestQueue.length >= maxRequests) {
    const oldestRequest = requestQueue[0];
    const waitTime = timeWindow - (now - oldestRequest);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }

  requestQueue.push(now);
  return callback();
};

// Search with rate limiting
export const searchItemsWithRateLimit = async (term, mediaType, limit) => {
  return rateLimit(() => searchItems(term, mediaType, limit));
};

// Error handling helper
export class APIError extends Error {
  constructor(message, code, response) {
    super(message);
    this.name = 'APIError';
    this.code = code;
    this.response = response;
  }
}

// Request helper with error handling
export const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new APIError(
        error.response.data.message || 'Server error',
        error.response.status,
        error.response
      );
    } else if (error.request) {
      throw new APIError('No response from server', 503);
    } else {
      throw new APIError('Request failed', 0);
    }
  }
};

// Usage example:
// const results = await handleRequest(() => searchItemsWithRateLimit('search term', 'music', 50));