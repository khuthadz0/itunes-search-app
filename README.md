# iTunes Search Application

A full-stack web application that allows users to search for content within the iTunes Store and Apple Books Store. Users can search for various types of media content and maintain a list of favorites.

## Features

- Search across multiple types of iTunes content (music, movies, podcasts, etc.)
- Filter results by media type
- View detailed content information including artwork
- Add/remove items to/from favorites list
- Responsive design for all devices
- Secure API with JWT authentication

## Technologies Used

### Frontend

- React.js
- Axios for API requests
- Tailwind CSS for styling
- Context API for state management

### Backend

- Node.js with Express
- JWT for API security
- Axios for iTunes API integration
- CORS enabled

## Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Backend Setup

1. Clone the repository and navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install express cors dotenv jsonwebtoken axios helmet morgan express-rate-limit
```

3. Create a .env file in the server directory:

```env
PORT=5000
JWT_SECRET=your-secret-key-here
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

4. Start the server:

```bash
npm start
```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install react react-dom axios tailwindcss postcss autoprefixer
```

3. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

4. Start the frontend application:

```bash
npm start
```

## Usage

1. Access the application at http://localhost:3000
2. Use the search bar to look for content
3. Select media type from the dropdown to filter results
4. Click on items to view more details
5. Use the heart icon to add/remove items from favorites

## API Endpoints

- POST /api/auth/token - Get JWT token
- POST /api/search - Search iTunes content
- GET /api/search/:id - Get specific item details

## Project Structure

```
<<<<<<< HEAD
itunes-search-app/
├── client/                     # Frontend React application
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js
│   │   │   ├── MediaTypeSelector.js
│   │   │   ├── SearchResults.js
│   │   │   ├── ResultCard.js
│   │   │   ├── FavoritesList.js
│   │   │   └── Header.js
│   │   ├── contexts/
│   │   │   └── FavoritesContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── server/                     # Backend Express application
│   ├── routes/
│   │   ├── auth.js
│   │   └── search.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── jwt.js
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md                   # Main project documentation
=======
project/
├── server/             # Backend directory
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   └── server.js       # Main server file
│
└── frontend/           # Frontend directory
    ├── public/         # Static files
    └── src/            # React source files
        ├── components/ # React components
        ├── contexts/   # Context providers
        ├── services/   # API services
        └── styles/     # CSS styles
>>>>>>> 8b0e09f4a5fe86273a44c23f584d98a476949b3f
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- iTunes Search API
- React documentation
- Tailwind CSS team

For more information about the iTunes Search API, visit [iTunes Search API Documentation](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html).
