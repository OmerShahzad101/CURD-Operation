//Allow to start a server
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const connectDB = require("./server/database/connection")


//read data from env file
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request  //log message
app.use(morgan("tiny"));

//mongod connection
connectDB()

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine our is ejs
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use("/", require('./server/routes/router')) ;


//port is running on the following port
app.listen(3000, () => {
  console.log(`Server is running ons http://localhost:${PORT}`);
});
