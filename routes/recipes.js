const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', (req, res) => {
    res.send('We are on recipes');
});

router.post('/', ((req, res) => {
   console.log(req.body);
}));

module.exports = router;