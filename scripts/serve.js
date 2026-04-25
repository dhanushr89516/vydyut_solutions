const express = require('express');
const path = require('path');
const app = express();

// Use the PORT provided by Railway, or fallback to 8080
const port = process.env.PORT || 8080;

// Path to your Angular build output
const distPath = path.join(__dirname, '../dist/vydyut-solutions/browser');

// Serve static files from the dist folder
app.use(express.static(distPath));

// Fallback: Send index.html for any other requests (handles Angular routing)
app.get('/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Listen on all network interfaces (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Production server is running on port ${port}`);
  console.log(`Serving files from: ${distPath}`);
});
