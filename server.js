// server.js
const express = require('express');
const app = express();
const PORT =   3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
