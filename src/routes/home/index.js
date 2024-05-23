"use strict";
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login.html", ctrl.output.login2);
router.post("/login.html", ctrl.process.login);

router.get("/form.html", ctrl.output.logintest);
router.post("/form.html", ctrl.process.register);

router.get("/product.html",ctrl.output.product);

module.exports = router;