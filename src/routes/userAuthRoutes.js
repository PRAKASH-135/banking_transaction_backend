const express = require('express');
const userAuthModel = require('../models/userAuth');
const authControllers = require("../controllers/authControllers")


const Router = express.Router();

Router.post("/register",authControllers.register);
Router.post("/login",authControllers.login);
Router.get("/logout",authControllers.logout);

module.exports = Router;