const express = require('express'); // Import the Express framework
const userRoutes = require('./routes/userRoute');
const eventRoutes = require('./routes/eventRoute');

const middleware = (app) => {
    // Middleware to parse JSON bodies
    app.use(express.json()); // Enable parsing of JSON request bodies

    // Serve static files from the 'public' directory
    app.use(express.static('public')); // Serve static files (like CSS and JS) from the 'public' directory

    // Enable parsing of URL-encoded data (for form submissions)
    app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded data

    // Import user routes
    app.use('/users', userRoutes);

    // Import event routes
    app.use('/api', eventRoutes);

    const userRoute = require('./routes/userRoute');
    app.use('/api/users', userRoute);

    // Serve uploaded files from the 'public/uploads' directory
    app.use('/uploads', express.static('public/uploads')); // Make the uploads directory accessible via the '/uploads' URL path
};

module.exports = middleware; // Export the middleware function