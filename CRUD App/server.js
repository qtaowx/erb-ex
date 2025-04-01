const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const middleware = require('./middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

middleware(app);

app.use('/api/items',itemRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})