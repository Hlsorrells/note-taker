// Dependencies
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Root director from which to serve static assets
app.use(serveStatic('public'));

// Data

// HTML Routes
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'notes.html'))
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'))
})

// API Routes


// Listener
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
