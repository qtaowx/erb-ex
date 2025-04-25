const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
middleware(app);

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/0407_db')
  .then(() => console.log('MongoDB connected ...'))
  .catch(err => console.log(err));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the 'index.html' file located in the 'public' directory
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
