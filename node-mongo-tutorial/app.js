// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

app.use('/users', userRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});