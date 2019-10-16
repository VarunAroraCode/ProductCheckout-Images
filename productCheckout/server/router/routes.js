const express = require('express');
const router = express.Router();
const checkout = require('../../database/index.js');

router.get('/checkout', (req, res) => {
  checkout.find((err, data) => {
    res.send(data);
  })
})

module.exports = router;