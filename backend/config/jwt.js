// JWT configuration
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'eed6ea6507c5e7de96b5784250a7a84dc68a9549a795924409bf37906d439d24',
    JWT_EXPIRY: '24h' // Token expires in 24 hours
  };