const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

//GET BACK ALL THE POST
router.get('/', async (req, res) => {
    try{
        const recipes = await Recipe.find();
        res.json(recipes);
    }catch(err) {
        res.json({message:err});
    }
});

// SUBMIT A POST
router.post('/', async (req, res) => {
   const recipe = new Recipe({
       title: req.body.title,
       ingredients: req.body.ingredients,
       preparation: req.body.preparation
   });
   try {
       const saveRecipe = await recipe.save()
       res.json(saveRecipe);
   } catch(err) {
       res.json({message: err});
   }
});

//SPECIFIC POST
router.get('/:recipeId', async (req,res) => {
    try{
        const recipe = await Recipe.findById(req.params.recipeId);
        res.json(recipe);
    }catch(err) {
        res.json({message:err});
    }
});

//DELETE POST
router.delete('/:recipeId', async (req,res) => {
   try{
       const removeRecipe = await Recipe.remove({_id: req.params.recipeId});
       res.json(removeRecipe);
   } catch(err) {
       res.json({message:err});
   }
});

// UPDATE A POST
module.exports = router;