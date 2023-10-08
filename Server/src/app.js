var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const cors = require("cors");
const plantRoute = require("./routes/PlantRoute");
const orderRoute = require("./routes/OrderRoute");
const cartRoute = require("./routes/CartRoute");
const userRoute = require("./routes/UserRoute");
const mongoose = require("mongoose");
require("dotenv").config();
require("./models/Plants");
require("./models/User");

var app = express();

//create the server
const server = http.createServer(app);
server.listen(5000, () => {
  console.log("app is running on port 5000 !");
});

app.use('/uploads', express.static('uploads'));

//connect to database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

//disable cors :
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Plant Route File
app.use("/plant", plantRoute);
app.use("/user", userRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
});
module.exports = app;
