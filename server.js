// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

// Root director from which to serve static assets
app.use(express.json());
app.use(express.static('public'))
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

// Listener
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
