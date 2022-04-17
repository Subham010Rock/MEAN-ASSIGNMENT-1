// import express module using require and store it in const variable
const express = require("express");

// importing path module
// It provides utilities for working with file and directory paths
const path = require("path");

// import routes.js file in server.js file
// The routes.js is reponsible for routes of the response view as output
const routes = require("./routes");

// making object of express module and storing it in app
const app = express();

// Adding Bootstrap css
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
// Adding Bootstrap js
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
// Adding Jquery
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

// using routes as middleware
app.use("/", routes);

// port variable
const PORT = 3000;

// app.listen() used to listen connections on specified port
// it will console a message if server runs successfully
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
