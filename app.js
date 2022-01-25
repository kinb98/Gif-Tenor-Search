//Required Libraries
const express = require("express");

//App Setup
const app = express();

//Middleware

//Routes
app.get("/", (req, res) => {
  res.send("Hello Squirrel");
});

app.get("/:username", (req, res) => {});

//Start Server
app.listen(3000, () => {
  console.log("Gif search listening at PORT 3000");
});
