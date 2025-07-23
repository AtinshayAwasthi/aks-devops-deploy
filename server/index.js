const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve API endpoints
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// For any request that doesn't match an API route, send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
