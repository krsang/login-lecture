"use strict";

const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.set("views", "./src/views");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static(`${__dirname}/src/js`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const home = require("./src/routes/home");
app.use("/", home);



module.exports = app;