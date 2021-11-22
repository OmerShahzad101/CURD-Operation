//Allow to start a server
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

//read data from env file
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request  //log message
app.use(morgan("tiny"));

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine our is ejs
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
  //   res.send("Curd Application");
  res.render("index");
});


app.get("/add-user", (req, res) => {
  //   res.send("Curd Application");
  res.render("add_user");
});

app.get("/update-user", (req, res) => {
  //   res.send("Curd Application");
  res.render("update_user");
});


//port is running on the following port
app.listen(3000, () => {
  console.log(`Server is running ons http://localhost:${PORT}`);
});
