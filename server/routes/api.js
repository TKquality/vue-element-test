const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.send('Welcome to "The World"...');
});

module.exports = router;
