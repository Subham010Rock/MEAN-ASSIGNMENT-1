// import express module using require and store it in const variable
const express = require("express");

// making object of express module and storing it in app
const app = express();

// port variable
const PORT = 3000;

// app.get() will return 'Hello World' when we open localhost:3000
app.get("/", (req, res) => res.send("Hello World"));

// app.listen() used to listen connections on specified port
// it will console a message if server runs successfully
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
