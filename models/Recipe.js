const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: [String],
    preparation: {
        type: Map,
        of: String
    }
});

module.exports = mongoose.model('Recipes', RecipeSchema);