const express = require('express');
const Router = express.Router();

// calling controllers
const { registerUser } = require('../controllers/user-management-controller')
// calling controllers

//Creating Routers
Router.post('/register',registerUser)
//Creating Routers

module.exports =  Router