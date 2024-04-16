const express = require('express');
const router = express.Router();

// Middleware for logging
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route to handle GET requests to /api/data
router.get('/api/data', (req, res) => {
    // Logic to retrieve data
    const data = {
        message: 'This is some data from the server'
    };
    res.json(data);
});

// Route to handle POST requests to /api/data
router.post('/api/data', (req, res) => {
    // Logic to handle incoming data
    console.log('Received data:', req.body);
    res.send('Data received successfully');
});

module.exports = router;
