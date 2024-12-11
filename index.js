// index.js
const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', schoolRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
