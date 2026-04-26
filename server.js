const express = require("express");
const app = express();

// PORT from environment
const PORT = process.env.PORT || 3000;

// SECRET from environment
const SECRET = process.env.JWT_SECRET || "defaultsecret";

app.get("/test", (req, res) => {
  res.send("CI/CD is working for auto-deployment");
});

app.get("/secret", (req, res) => {
  res.send("Secret is: " + SECRET);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});