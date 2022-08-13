const express = require('express');
const router = express.Router();

// @desc Login/Landing page
// @route GET /
router.get('/', (req, res) => {
  res.send('Login');
});
// @desc Dashboard
// @route GET /dasboard
router.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

module.exports = router;
