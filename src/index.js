const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Dockerized application OK 🚀" });
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});