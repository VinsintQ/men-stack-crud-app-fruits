// Here is where we import modules
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const Fruit = require("./models/fruit.js");
dotenv.config();

//DATABASE

const app = express();
require("./config/database");

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//ROUTES

//LANDING PAGE
app.get("/", (req, res, next) => {
  //next for middleware(morgan)
  res.render("index.ejs");
});

//Fruits
app.get("/fruits/new", (req, res, next) => {
  res.render("fruits/new.ejs");
});
app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits/new");
});
//conecting to mongoose

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
