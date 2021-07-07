const express = require("express");

const app = express();

const { API_VERSION } = require("./config");

//Load Routings..
const userRoutes = require("./routers/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//router Basic
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
