// Dependencies
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const PORT = 3000;

// Root director from which to serve static assets
app.use(serveStatic('public'));

// Data

// HTML Routes

// API Routes

// Listener
app.listen(3000, function() {
    console.log("App listening on PORT " + PORT);
  });
