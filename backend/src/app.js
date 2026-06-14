const express = require("express");
const cookieParser = require("cookie-parser"); 
const configEnv = require("./config/.svn/config.env");

const { handle404Error, handleGlobalError } = require("./middlewares");
const { v1Routes } = require("./routes/v1");
const { cors } = require("./config");
const path = require("path");
const app = express();

app.use(cors)
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());

app.use("/api/v1", v1Routes);

app.use(handle404Error);
app.use(handleGlobalError);

module.exports = { app };
