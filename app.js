const express = require("express");

const app = express();

const { API_VERSION } = require("./config");

//Load Routings..
const userRoutes = require("./routers/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configure Header HTTP
//....

//router Basic
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
