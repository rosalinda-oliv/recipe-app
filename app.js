const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const recipesRoute = require('./routes/recipes');

app.use('/recipes', recipesRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connect to DB!')
);

//How to we start listening to the server
app.listen(4000);