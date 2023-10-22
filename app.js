// app.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const {
  signUp,
  login,
  getUser,
  updateUser,
  deleteUser,
  changePassword,
} = require("./route"); // Create a 'routes.js' file for the routes
const authenticationMiddleware = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define your routes
app.post("/signup", signUp);
app.post("/login", login);
app.get("/userdetail/:id", getUser);
app.get("/user/:id", authenticationMiddleware, getUser);
app.patch("/user/:id", authenticationMiddleware, updateUser);
app.delete("/user/:id", deleteUser);
app.patch("/user/:id/change-password", changePassword);

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
