
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('TaskFlow Backend is Running!');
});

// API health route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'TaskFlow API is working successfully'
  });
});

module.exports = app;
