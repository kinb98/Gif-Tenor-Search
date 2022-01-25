//Required Libraries
const express = require("express");

//App Setup
const app = express();

//Middleware
const { engine } = require("express-handlebars");
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
app.get("/", (req, res) => {
  const gifUrl =
    "https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245";
  res.render("hello-gif", { gifUrl });
});

app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.render("greetings", { name });
});

//Start Server
app.listen(3000, () => {
  console.log("Gif search listening at PORT 3000");
});
