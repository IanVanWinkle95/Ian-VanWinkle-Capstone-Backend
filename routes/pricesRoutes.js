const express = require('express')
const router = express.Router()
const prices = require('../data/prices')


router.get('/prices', (req, res) => {
  res.json(prices)
})

module.exports = router