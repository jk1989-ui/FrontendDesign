// Dependencies
const express = require('express');
const Router =  express.Router();
// Dependencies

//Accessing the Controllers
const { addingTwoNumbers, subtractingTwoNumbers } =  require('../controllers/first-controller')
//Accessing the Controllers

//Defining Routes
Router.post('/addingTwoNumbers',addingTwoNumbers)
Router.post('/subtractingTwoNumbers',subtractingTwoNumbers)
//Defining Routes

module.exports = Router;

// Post
// Put
// Update
// Delete
// Get