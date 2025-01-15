const express = require('express');
const axios = require('axios');
const router = express.Router();
const auth = require('../middleware/auth');

// Search iTunes API
router.post('/', auth, async (req, res) => {
  try {
    const { term, media = 'all', limit = 50 } = req.body;

    if (!term) {
      return res.status(400).json({ message: 'Search term is required' });
    }

    const response = await axios.get('https://itunes.apple.com/search', {
      params: {
        term,
        media,
        limit,
        country: 'US'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('iTunes API Error:', error);
    res.status(500).json({ 
      message: 'Error fetching data from iTunes',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;