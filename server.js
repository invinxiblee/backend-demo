const express = require("express");
const app = express();

// PORT from environment
const PORT = process.env.PORT || 3000;

// SECRET from environment
const SECRET = process.env.JWT_SECRET || "defaultsecret";

app.get("/", (req, res) => {
  res.send("Backend is running with env variables");
});

app.get("/secret", (req, res) => {
  res.send("Secret is: " + SECRET);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});