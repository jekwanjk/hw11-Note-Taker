// Dependency
const express = require("express");

// Start express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

// Initialize server
app.listen(PORT, () => {
  console.log("Server is listening on: http://localhost" + PORT);
});