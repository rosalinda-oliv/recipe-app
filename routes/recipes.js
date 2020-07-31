const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', (req, res) => {
    res.send('We are on recipes');
});

router.post('/', (req, res) => {
   const recipe = new Recipe({
       title: req.body.title,
       ingredients: req.body.ingredients,
       preparations: req.body.preparations
   });

   recipe.save()
       .then( data => {
           res.json(data);
       })
       .catch(err => {
        res.json({message: err});
    });
});

module.exports = router;