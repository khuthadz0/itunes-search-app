const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { JWT_SECRET, JWT_EXPIRY } = require('../config/jwt');

// Route to generate a new token
router.post('/token', (req, res) => {
  try {
    const token = jwt.sign(
      { 
        type: 'access',
        timestamp: Date.now() 
      }, 
      JWT_SECRET, 
      { expiresIn: JWT_EXPIRY }
    );

    res.json({ token });
  } catch (error) {
    console.error('Token generation error:', error);
    res.status(500).json({ message: 'Error generating token' });
  }
});

module.exports = router;